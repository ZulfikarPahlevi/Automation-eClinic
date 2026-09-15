import { expect, type Page } from "@playwright/test";
import { loginLocators } from "./login.locators.js";

export class LoginPage {
  constructor(private page: Page) {}

  async fillClinic(clinic: string) {
    await this.page.locator(loginLocators.clinicInput).fill(clinic);
  }

  async selectClinic(clinicName: string) {
    const clinic = this.page
      .locator(loginLocators.clinicOption)
      .filter({ hasText: clinicName })
      .first();

    await clinic.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await clinic.click();
  }
  async fillUsername(username: string) {
    await this.page.locator(loginLocators.inputUsername).fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator(loginLocators.inputPassword).fill(password);
  }

  async clickLogin() {
    await this.page.locator(loginLocators.loginButton).click();
  }
}
