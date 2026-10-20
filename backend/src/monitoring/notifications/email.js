const nodemailer = require('nodemailer');
const { NotificationProvider } = require('./NotificationProvider');
const { engine, DEFAULT_EMAIL_SUBJECT, DEFAULT_EMAIL_TEMPLATE } = require('./templates');

class EmailProvider extends NotificationProvider {
  async send(config, context) {
    const { host, port, user, pass, to } = config;

    if (!host || !to) {
      throw new Error('E-mail: host SMTP e destinatário(s) "to" são obrigatórios.');
    }

    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port || '587', 10),
      secure: parseInt(port || '587', 10) === 465,
      auth: user ? { user, pass } : undefined,
      tls: {
        rejectUnauthorized: false
      }
    });

    const subjectTemplate = config.customSubject || DEFAULT_EMAIL_SUBJECT;
    const bodyTemplate = config.customTemplate || DEFAULT_EMAIL_TEMPLATE;

    const subject = await engine.parseAndRender(subjectTemplate, context);
    const html = await engine.parseAndRender(bodyTemplate, context);

    await transporter.sendMail({
      from: config.from || user || `"DC Monitoramento" <alerta@${host}>`,
      to,
      subject,
      html
    });
  }
}

module.exports = { EmailProvider };
