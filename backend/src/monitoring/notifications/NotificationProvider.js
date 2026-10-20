class NotificationProvider {
  /**
   * Envia uma notificação
   * @param {object} config Configuração descriptografada do canal
   * @param {object} context Contexto do evento ({ name, hostnameOrURL, status, msg, localDateTime, downtime, event, monitor, heartbeat })
   * @returns {Promise<void>}
   */
  async send(config, context) {
    throw new Error('Método send() não implementado pelo provedor de notificação.');
  }
}

module.exports = { NotificationProvider };
