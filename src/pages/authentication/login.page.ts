import type { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async fillClinic(clinic: string) {
    await this.page.locator("#nama-faskes").fill(clinic);
  }

  async selectClinic() {
    const clinic = this.page
      .locator("#ui-id-4 .ui-menu-item")
      .filter({ hasText: "KLINIK A DEV 4" });

    await clinic.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await clinic.click({ force: true });

    await this.page.locator("#nama-faskes").waitFor({ state: "visible" });

    console.log(
      "NILAI FASKES SETELAH KLIK:",
      await this.page.locator("#nama-faskes").inputValue(),
    );
  }
  async fillUsername(username: string) {
    await this.page.locator("#email").fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator("#password").fill(password);
  }

  async clickLogin() {
    await this.page.locator("#login").click();
  }
}
