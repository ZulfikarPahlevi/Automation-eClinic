import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { CustomWorld } from './world.js';
import { LoginPage } from '../pages/authentication/login.page.js';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false
  });

  this.page = await this.browser.newPage();

  this.loginPage = new LoginPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.browser.close();
});