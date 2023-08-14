const {test} = require('@playwright/test');

test('Browser Context Playwright test',async ({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Page playwright test',async ({page})=>
{
    await page.goto("https://www.google.com/");
});
