const assert = require("assert");
const puppeteer = require("puppeteer");

async function runTest() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com");
    const title = await page.$eval("p", (el) =>
    el.innerText);
    console.log("Title value:", title);
    assert.equal(title, "This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.");
    browser.close();
}

runTest();