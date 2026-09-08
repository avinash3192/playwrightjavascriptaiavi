// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //  reporter: 'html',
  reporter: [['html'],['line'],['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    //   workers: 6,
        //workers: 3, means that three worker processes will be used to run the tests in parallel. This can help speed up test execution by running multiple tests simultaneously.
    // retries: 1,
        //retries: 1, means that each test will be retried once if it fails. This can help reduce the impact of flaky tests and improve the overall reliability of the test suite.
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    testIdAttribute: 'id',
    //headless = false, means that the browser will be launched in a visible window, allowing you to see the test execution in real-time. This can be useful for debugging and understanding how the tests interact with the application.    
    // screenshot: 'only-on-failure', means that a screenshot will be taken only when a test fails. This can be useful for debugging and understanding why a test failed.
    // video: 'retain-on-failure', means that a video recording of the test execution will be retained only when a test fails. This can also be useful for debugging and understanding why a test failed.
    // testIdAttribute: 'id', means that the test ID attribute will be set to 'id'. This can be useful for identifying tests in reports and logs.


    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // trace: 'on', 
    //trace: 'on'- means that a trace will be collected for every test run, regardless of whether the test passes or fails.
    //  This can be useful for debugging and understanding how the tests interact with the application.
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

