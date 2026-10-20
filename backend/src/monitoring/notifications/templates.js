const { Liquid } = require('liquidjs');

const engine = new Liquid();

// Template Telegram padrão em Markdown (MD)
const DEFAULT_TELEGRAM_TEMPLATE = `*🚨 ALERTA DE MONITORAMENTO*

*Serviço:* {{ name }}
*Alvo:* \`{{ hostnameOrURL }}\`
*Status:* *{{ status }}*
*Mensagem:* {{ msg }}
*Horário:* {{ localDateTime }}{% if downtime %}
*Tempo Fora:* {{ downtime }}{% endif %}`;

// Assunto e Template de E-mail
const DEFAULT_EMAIL_SUBJECT = `[{{ status }}] Alerta de Monitoramento - {{ name }}`;

const DEFAULT_EMAIL_TEMPLATE = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
  <h2 style="margin-top: 0; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
    {{ status }} - Alerta do Sistema
  </h2>
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">Serviço:</td>
      <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">{{ name }}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Alvo / Host:</td>
      <td style="padding: 8px 0; color: #0f172a;">{{ hostnameOrURL }}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Status Atual:</td>
      <td style="padding: 8px 0; font-weight: bold;">{{ status }}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Mensagem:</td>
      <td style="padding: 8px 0; color: #334155;">{{ msg }}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Horário:</td>
      <td style="padding: 8px 0; color: #334155;">{{ localDateTime }}</td>
    </tr>
    {% if downtime %}
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Tempo Fora:</td>
      <td style="padding: 8px 0; color: #ef4444; font-weight: 700;">{{ downtime }}</td>
    </tr>
    {% endif %}
  </table>
  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; text-align: center;">
    DC Monitoramento — PM2 Manager
  </div>
</div>`;

module.exports = {
  engine,
  DEFAULT_TELEGRAM_TEMPLATE,
  DEFAULT_EMAIL_SUBJECT,
  DEFAULT_EMAIL_TEMPLATE
};
