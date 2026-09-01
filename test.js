const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');

  // Isi username dan password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Klik tombol login
  await page.click('#login-button');

  // Tunggu halaman berubah (misalnya URL berubah)
  await page.waitForURL('**/inventory.html');

  console.log('Login berhasil!');
  await browser.close();
})();
