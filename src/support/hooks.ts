import { Before, After } from "@cucumber/cucumber";
import { chromium } from "playwright";
import type { CustomWorld } from "./world.js";
import { LoginPage } from "../pages/authentication/login.page.js";
import { RegistrationPage } from "../pages/patient/registration/registration.page.js";

Before({ timeout: 30000 }, async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false,
  });

  this.page = await this.browser.newPage();

  this.loginPage = new LoginPage(this.page);
  this.registrationPage = new RegistrationPage(this.page);
});

After(async function (this: CustomWorld) {
  await this.browser.close();
});
