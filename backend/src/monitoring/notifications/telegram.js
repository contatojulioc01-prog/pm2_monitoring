const axios = require('axios');
const { NotificationProvider } = require('./NotificationProvider');
const { engine, DEFAULT_TELEGRAM_TEMPLATE } = require('./templates');
const { logger } = require('../utils/logger');

/**
 * Escapa caracteres especiais de Markdown para o Telegram v1 (ou limpa caracteres conflitantes)
 * Caracteres que Telegram Markdown interpreta: * (bold), _ (italic), ` (code), [ (link)
 */
function escapeTelegramMarkdown(text) {
  if (!text) return '';
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/\*/g, '\\*')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]');
}

class TelegramProvider extends NotificationProvider {
  async send(config, context) {
    const botToken = config.botToken;
    const chatId = config.chatId;

    if (!botToken || !chatId) {
      throw new Error('Telegram: botToken e chatId são obrigatórios.');
    }

    // Contexto seguro para renderização do template em Markdown (MD)
    const safeContext = {
      name: escapeTelegramMarkdown(context.name),
      hostnameOrURL: String(context.hostnameOrURL || '').replace(/`/g, "'"),
      status: escapeTelegramMarkdown(context.status),
      msg: escapeTelegramMarkdown(context.msg),
      localDateTime: escapeTelegramMarkdown(context.localDateTime),
      downtime: context.downtime ? escapeTelegramMarkdown(context.downtime) : null
    };

    const template = config.customTemplate || DEFAULT_TELEGRAM_TEMPLATE;
    const text = await engine.parseAndRender(template, safeContext);

    const payload = {
      chat_id: chatId,
      text: text,
      parse_mode: 'Markdown'
    };

    if (config.threadId || config.message_thread_id) {
      payload.message_thread_id = parseInt(config.threadId || config.message_thread_id, 10);
    }

    if (config.disable_notification) {
      payload.disable_notification = true;
    }

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(apiUrl, payload, { timeout: 10000 });
    } catch (err) {
      // Se falhar por erro de parsing do Markdown do Telegram (HTTP 400 'can't parse entities'),
      // faz fallback automático para texto puro garantindo que o alerta nunca seja perdido
      const errResponse = err.response?.data?.description || err.message;
      if (err.response?.status === 400 && String(errResponse).toLowerCase().includes('parse')) {
        logger.warn(`Telegram MD parse error (${errResponse}). Tentando reenvio em texto puro...`);
        const fallbackPayload = {
          ...payload,
          text: text.replace(/[*_`\\[\]]/g, ''),
          parse_mode: undefined
        };
        await axios.post(apiUrl, fallbackPayload, { timeout: 10000 });
        return;
      }
      throw new Error(`Telegram API Error: ${errResponse}`);
    }
  }
}

module.exports = { TelegramProvider };
