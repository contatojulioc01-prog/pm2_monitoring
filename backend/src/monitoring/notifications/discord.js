const axios = require('axios');
const { NotificationProvider } = require('./NotificationProvider');

class DiscordProvider extends NotificationProvider {
  async send(config, context) {
    const webhookUrl = config.webhookUrl;
    if (!webhookUrl) throw new Error('Discord: webhookUrl é obrigatório.');

    const isDown = context.status.toLowerCase().includes('down') || context.event === 'down';
    const color = isDown ? 0xef4444 : 0x10b981; // vermelho ou verde

    const fields = [
      { name: 'Alvo', value: context.hostnameOrURL || '-', inline: true },
      { name: 'Status', value: context.status, inline: true },
      { name: 'Horário', value: context.localDateTime, inline: false },
      { name: 'Mensagem', value: context.msg || '-', inline: false }
    ];

    if (context.downtime) {
      fields.push({ name: 'Tempo Fora', value: context.downtime, inline: true });
    }

    const payload = {
      username: 'DC Monitoramento',
      embeds: [
        {
          title: `Alerta: ${context.name}`,
          color,
          fields,
          footer: { text: 'DC Monitoramento — PM2 Manager' }
        }
      ]
    };

    await axios.post(webhookUrl, payload, { timeout: 10000 });
  }
}

module.exports = { DiscordProvider };
