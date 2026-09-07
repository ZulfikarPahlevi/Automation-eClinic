import { Given, When, Then } from "@cucumber/cucumber";
import type { CustomWorld } from "../../src/support/world.js";
import { expect } from "@playwright/test";
import { env } from "../../src/config/env.js";

Given(
  "user berada di halaman login eClinic",
  async function (this: CustomWorld) {
    await this.page.goto("https://dev4.eclinic.id/login");
  },
);

When(
  "user mengisi nama faskes {string}",
  async function (this: CustomWorld, clinic: string) {
    await this.loginPage.fillClinic(env.loginClinic);
    await this.page
      .locator("#ui-id-4")
      .getByText("Nama Faskes Bandung")
      .click();
  },
);

When("user mengisi username", async function (this: CustomWorld) {
  await this.loginPage.fillUsername(env.loginUsername);
});

When("user mengisi password", async function (this: CustomWorld) {
  await this.loginPage.fillPassword(env.loginPassword);
});

When("user klik tombol Login", async function (this: CustomWorld) {
  await this.loginPage.clickLogin();
});

Then("user berhasil masuk ke halaman Home", async function (this: CustomWorld) {
  await expect(this.page).toHaveURL("dev4.eclinic.id/home");
  // assertion Home kita rapikan setelah ini
});
