const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.goto('http://localhost:1313/cv/', {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    path: 'static/pdf/cv.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
})();
