// import {test, expect } from "@playwright/test";

// test.beforeEach(async({page})=>{
//     await page.goto('https://tus.io/demo')

// })

// test('validate file upload',async({page})=>{
//     await page.locator('input[id="P0-0"]').click()
//     await page.locator('input[id="P0-0"]').setInputFiles('C:/Users/SIVAKUMAR/OneDrive/Pictures/Screenshots/Screenshot 2025-02-21 115926.png');
//     await page.waitForTimeout(5000)
//     console.log(await page.locator('[class="_heading_gq6c0_21"]').textContent())
//     await expect(page.locator('[class="_heading_gq6c0_21"]')).toHaveText('The upload is complete!')
// })