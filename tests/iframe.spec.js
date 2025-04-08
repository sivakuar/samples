import { test, expect } from "@playwright/test";

test.only('I-frame', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/#top');
    
    const frame = await page.frameLocator('iframe[name="iframe-name"]');
    await frame.locator('.navbar-collapse.collapse.clearfix ul li a[href="mentorship"]').first().click();

    await page.pause();
});
