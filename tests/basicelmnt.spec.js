// import { test,expect } from '@playwright/test';

// test('valid login',async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator('[id="username"]').fill('student')
//     await page.locator('[name="password"]').fill('Password123')
//     await page.locator('.btn').click()
//     await expect(page.locator('.post-title')).toBeVisible('Logged In Successfully')
   
// })


// import { test,expect } from '@playwright/test';

// test('invalid password',async({page})=>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator('[id="username"]').fill('student')
//     await page.locator('[name="password"]').fill('Password12')
//     await page.getByRole('button').click()
//     await expect(page.locator('[id="error"]')).toBeVisible('Your password is invalid!')
// })  