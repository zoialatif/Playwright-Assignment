// @ts-check
const { defineConfig, devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 1000 * 1000,
  expect: {
    timeout: 200000,
  },
  // retries: 1,
  reporter: [
    ['html'],
    // ['allure-playwright'],
    /*  [
       'playwright-mail-reporter',
       {
         host: 'mail.sltn.net',
         port: '465',
         username: 'autogen@sltn.net',
         password: '3RRqbbUsLTy2',
         from: 'autogen@sltn.net',
         to: 'naveed.akhtar@sltn.net, muhammad.zohaib@sltn.net, m.muzammil@sltn.net',
         linkToResults: process.cwd() + '/playwright-report/index.html',
         subject: 'Client Workflow execution',
       }
     ] */
  ],

  /* Configure projects for major browsers */
  workers: 1,
  projects: [
    {
      // name: 'chromium',

      use: {
        ...devices['Desktop Chromium'],
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
          // headless: false,
        screenshot: "only-on-failure",
        trace: "off",
        // viewport: { width: 1700, height: 900 },
        actionTimeout: 200000,
      },
    },

  ],


});






// // @ts-check
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   fullyParallel: true,
//   reporter: [['html', { open: 'never' }]],
//   use: {
//     baseURL: 'https://www.wikipedia.org',
//     trace: 'on-first-retry',
//   },
// });
