const puppeteer = require('puppeteer');
const path = require('path');

const createProfile = async (profileName) => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: path.resolve(`./profiles/${profileName}`)
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await browser.close();
};

module.exports = {
  createProfile
};
