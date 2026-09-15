import { expect, type Page } from "@playwright/test";
import { registrationLocators } from "./registration.locators.js";

export type PatientRegistrationData = {
  fullName: string;
  ageYear: string;
  ageMonth?: string;
  ageDay?: string;
  phoneNumber: string;
  noKtp?: boolean;
};

export class RegistrationPage {
  constructor(private readonly page: Page) {}

  async openRegistrationPage() {
    await this.page.locator(registrationLocators.registrationMenu).click();
  }

  async openPatientRegistrationForm() {
    await this.page.locator(registrationLocators.createButton).click();
    await this.page.locator(registrationLocators.createPatientButton).click();
  }

  async fillPatientData(data: PatientRegistrationData) {
    if (data.noKtp) {
      await this.page.locator(registrationLocators.noKtpCheckbox).check();
    }

    await this.page
      .locator(registrationLocators.fullNameInput)
      .fill(data.fullName);
    await this.page
      .locator(registrationLocators.ageYearInput)
      .fill(data.ageYear);

    if (data.ageMonth !== undefined) {
      await this.page
        .locator(registrationLocators.ageMonthInput)
        .fill(data.ageMonth);
    }

    if (data.ageDay !== undefined) {
      await this.page
        .locator(registrationLocators.ageDayInput)
        .fill(data.ageDay);
    }

    await this.page
      .locator(registrationLocators.phoneNumberInput)
      .fill(data.phoneNumber);
  }

  async selectGeneralInsurance() {
    await this.page
      .locator(registrationLocators.insuranceSelect)
      .selectOption({ value: "0000" });
  }

  async savePatient() {
    await this.page.locator(registrationLocators.savePatientButton).click();
  }

  async expectPatientSaved() {
    await expect(
      this.page.locator(registrationLocators.savePatientButton),
    ).toBeHidden();
  }

  async expectServiceRegistrationPage() {
    await expect(this.page).toHaveURL(
      /pendaftaran.*pelayanan|pelayanan.*pendaftaran/i,
    );
  }

  async enter() {
    await this.page.locator(registrationLocators.registrationMenu).click;
  }
}
