const axios = require('axios');
const { NotificationProvider } = require('./NotificationProvider');

class SlackProvider extends NotificationProvider {
  async send(config, context) {
    const webhookUrl = config.webhookUrl;
    if (!webhookUrl) throw new Error('Slack: webhookUrl é obrigatório.');

    const isDown = context.status.toLowerCase().includes('down') || context.event === 'down';
    const emoji = isDown ? ':red_circle:' : ':white_check_mark:';

    const text = `${emoji} *[${context.status}] ${context.name}*\n` +
      `*Alvo:* \`${context.hostnameOrURL}\`\n` +
      `*Mensagem:* ${context.msg}\n` +
      `*Horário:* ${context.localDateTime}` +
      (context.downtime ? `\n*Tempo Fora:* ${context.downtime}` : '');

    await axios.post(webhookUrl, { text }, { timeout: 10000 });
  }
}

module.exports = { SlackProvider };
