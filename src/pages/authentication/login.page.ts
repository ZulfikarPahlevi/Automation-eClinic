import { expect, type Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async fillClinic(clinic: string) {
    await this.page.locator("#nama-faskes").fill(clinic);
  }

  async selectClinic(clinicName: string) {
    const escapedClinicName = clinicName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const clinic = this.page
      .locator(".ui-autocomplete:visible .ui-menu-item")
      .filter({
        hasText: new RegExp(`^\\s*${escapedClinicName}\\s*$`, "i"),
      })
      .first();

    await clinic.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await clinic.click();

    await expect(this.page.locator("#nama-faskes")).toHaveValue(
      new RegExp(`^${escapedClinicName}$`, "i"),
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
