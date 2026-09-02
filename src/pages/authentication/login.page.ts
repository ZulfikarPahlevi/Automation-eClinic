import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async fillClinic(clinic: string) {
    await this.page.locator('#nama-faskes').fill(clinic);
  }

  async fillUsername(username: string) {
    await this.page.locator('#email').fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator('#password').fill(password);
  }

  async clickLogin() {
    await this.page.locator('#login').click();
  }
}