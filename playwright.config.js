const {devices} = require('@playwright/test');

const config = {
  testDir: './tests',
  timeout: 30*1000,
  expect: {
    timeout: 20000
  },
  report: 'html',
  use: {
browserName: 'chromium'
  },
};
module.exports=config;