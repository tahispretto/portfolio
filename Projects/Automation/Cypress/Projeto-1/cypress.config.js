const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar listeners de eventos caso precise
    },

    video: true, // Habilita a gravação de vídeos
    videoCompression: 32, // Define a compressão do vídeo (0 a 51, sendo 0 sem compressão)
    videoUploadOnPasses: false, // Não envia vídeos se o teste passar

    screenshotOnRunFailure: true, // Captura screenshots em caso de falhas
    screenshotsFolder: "assets/screenshots", // Pasta fora da pasta cypress para screenshots

    reporter: "mochawesome", // Utiliza o reporter mochawesome
    reporterOptions: {
      reportDir: "assets/reports", // Pasta fora da pasta cypress para relatórios
      overwrite: false, // Não sobrescrever relatórios antigos
      html: true, // Gera um arquivo HTML
      json: true, // Gera um arquivo JSON
    },

    videosFolder: "assets/videos", // Pasta fora da pasta cypress para vídeos

    // Desabilitar a política de segurança do navegador para permitir testes de cross-origin
    chromeWebSecurity: false, // Desabilita a política de segurança para evitar problemas com CORS

    // Ignorar exceções não capturadas
    retries: {
      runMode: 2, // Tentativas em caso de falhas durante a execução dos testes
      openMode: 0, // Tentativas quando estiver aberto no modo interativo
    },

    // Habilitar a execução interativa (sem headless) para depuração de testes
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});

// Em cypress/support/index.js ou no seu arquivo de configuração
Cypress.on('uncaught:exception', (err, runnable) => {
  // Impede que o erro falhe o teste
  return false;
});
