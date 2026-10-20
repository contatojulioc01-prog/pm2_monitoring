const axios = require('axios');
const { NotificationProvider } = require('./NotificationProvider');

class GenericWebhookProvider extends NotificationProvider {
  async send(config, context) {
    const url = config.url || config.webhookUrl;
    if (!url) throw new Error('Webhook: url é obrigatória.');

    const method = (config.method || 'POST').toUpperCase();
    let headers = {
      'Content-Type': 'application/json',
      'User-Agent': 'DC-Monitoramento/2.0'
    };

    if (config.headers) {
      try {
        const customHeaders = typeof config.headers === 'string' ? JSON.parse(config.headers) : config.headers;
        headers = { ...headers, ...customHeaders };
      } catch {}
    }

    const payload = {
      event: context.event,
      service: context.name,
      target: context.hostnameOrURL,
      status: context.status,
      message: context.msg,
      timestamp: context.localDateTime,
      downtime: context.downtime,
      monitorId: context.monitor?.id
    };

    await axios({
      url,
      method,
      headers,
      data: payload,
      timeout: 10000
    });
  }
}

module.exports = { GenericWebhookProvider };
