// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('@shelex/cypress-allure-plugin/writer')(on, config);
//       return config;
//     },
//     baseUrl: 'https://thetestingworldapi.com',
//     specPattern: 'cypress/e2e/**/*.cy.js'
//   },
//   env: {
//     allure: true,
//     allureResultsPath: 'allure-results' // Path where allure results will be stored
//   }
// });

// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   reporter: 'junit',
//   reporterOptions: {
//     mochaFile: 'cypress/reports/junit-[hash].xml',
//     toConsole: true,
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Any additional plugins or configuration
//     },
//     baseUrl: 'https://thetestingworldapi.com',
//     specPattern: 'cypress/e2e/**/*.cy.js'
//   }
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome', // Specify mochawesome as the reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // The directory where reports will be saved
    overwrite: false,
    html: true, // Generate HTML reports
    json: true, // Also generate JSON reports
    reportFilename: 'mochawesome-report' // Name of the generated report
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Add any required plugins
    },
    baseUrl: 'https://thetestingworldapi.com', // Replace with your base URL
    specPattern: 'cypress/e2e/**/*.cy.js' // Adjust the spec pattern as needed
  }
});

