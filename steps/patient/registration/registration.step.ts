import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { env } from "../../../src/config/env.js";
import type { PatientRegistrationData } from "../../../src/pages/patient/registration/registration.page.js";
import type { CustomWorld } from "../../../src/support/world.js";

const patientData: PatientRegistrationData = {
  fullName: `Automation Patient ${Date.now()}`,
  ageYear: "25",
  ageMonth: "0",
  ageDay: "0",
  phoneNumber: `0812${String(Date.now()).slice(-8)}`,
  noKtp: true,
};

Given(
  "User berada pada halaman Pendaftaran Pasien",
  async function (this: CustomWorld) {
    await this.page.goto("https://dev4.eclinic.id/login");
    await this.loginPage.fillClinic(env.loginClinic);
    await this.loginPage.selectClinic(env.loginClinic);
    await this.loginPage.fillUsername(env.loginUsername);
    await this.loginPage.fillPassword(env.loginPassword);
    await this.loginPage.clickLogin();
    await expect(this.page).toHaveURL(/\/home/);

    await this.registrationPage.enter();
    await this.registrationPage.openRegistrationPage();
    await this.registrationPage.openRegistrationPage();
    await this.registrationPage.openPatientRegistrationForm();
  },

  And{
    "User membuka form pendaftaran pasien",
  }

  When(
    "User mengisi seluruh data pendaftaran",
    async function (this: CustomWorld) {
      await this.registrationPage.fillPatientData(patientData);
    },
  ),
);

When("User memilih asuransi penjamin umum", async function (this: CustomWorld) {
  await this.registrationPage.selectGeneralInsurance();
});

When(
  "User menyimpan data pendaftaran pasien",
  async function (this: CustomWorld) {
    await this.registrationPage.savePatient();
  },
);

Then(
  "User berhasil menyimpan data pendaftaran pasien",
  async function (this: CustomWorld) {
    await this.registrationPage.expectPatientSaved();
  },
);

Then(
  "User berada pada halaman pendaftaran pelayanan",
  async function (this: CustomWorld) {
    await this.registrationPage.expectServiceRegistrationPage();
  },
);
