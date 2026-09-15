export const registrationLocators = {
  registrationMenu: "#menu_pendaftaran_pendaftaran_v2",
  createButton: "#button_create",
  createPatientButton: '[data-testid="registration-create-patient-button"]',
  insuranceSelect: 'select:has(option[value="0000"])',
  noKtpCheckbox: 'div:has-text("Tidak Bawa KTP") input[type="checkbox"]',
  fullNameInput: 'input[placeholder="Nama Lengkap"]',
  ageYearInput: ".input-group input:nth-of-type(1)",
  ageMonthInput: ".input-group input:nth-of-type(2)",
  ageDayInput: ".input-group input:nth-of-type(3)",
  phoneNumberInput: 'input[placeholder="Nomor HP"]',
  savePatientButton: 'button:has-text("Simpan Pasien")',
};
