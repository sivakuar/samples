// import { test, expect } from "@playwright/test";

// test('newtab', async ({ page }) => {
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//     const [newPage] = await Promise.all([  
//         page.waitForEvent('popup'),
//         page.locator('[id="opentab"]').click()
//     ]);

//     await newPage.waitForLoadState(); 
//     console.log(await newPage.title()); 

//     await newPage.locator('.navbar-nav.ml-auto li a[href="about.html"]').click();

//     await page.pause(); 
// });
