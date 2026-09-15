import { World } from '@cucumber/cucumber';
import type { IWorldOptions } from '@cucumber/cucumber';
import type { Browser, Page } from 'playwright';
import { LoginPage } from '../pages/authentication/login.page.js';
import { RegistrationPage } from '../pages/patient/registration/registration.page.js';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;
  loginPage!: LoginPage;
  registrationPage!: RegistrationPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
