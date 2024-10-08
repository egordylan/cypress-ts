import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: true,
  e2e: {
    baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
