import { test , expect } from "@playwright/test";

test("Dynamic Dropdown",async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
const statics = await page.locator('[id="dropdown-class-example"]')
statics.selectOption('Option2')
await page.pause()
})