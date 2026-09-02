import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../../src/support/world.js';

Given('user berada di halaman login eClinic', async function (
  this: CustomWorld
) {
  await this.page.goto('https://dev4.eclinic.id/login');
});

When('user mengisi nama faskes {string}', async function (
  this: CustomWorld,
  clinic: string
) {
  await this.loginPage.fillClinic(clinic);
});

When('user mengisi username {string}', async function (
  this: CustomWorld,
  username: string
) {
  await this.loginPage.fillUsername(username);
});

When('user mengisi password {string}', async function (
  this: CustomWorld,
  password: string
) {
  await this.loginPage.fillPassword(password);
});

When('user klik tombol Login', async function (
  this: CustomWorld
) {
  await this.loginPage.clickLogin();
});

Then('user berhasil masuk ke halaman Home', async function (
  this: CustomWorld
) {
  // assertion Home kita rapikan setelah ini
});