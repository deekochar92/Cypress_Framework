const { defineConfig } = require("cypress");
module.exports = defineConfig({
  pageLoadTimeout: 100000,
  reporter: 'cypress-mochawesome-reporter',
  blockHosts: ["*analytics.tiktok.com",
    "*connect.facebook.net",
    "*static.ads-twitter.com",
    "www.googleadservices.com",
    "www.googletagmanager.com"],
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
