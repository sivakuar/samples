// import {test , expect } from '@playwright/test';

// test('check box',async({page})=>{

//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
//     const valueToChek = ["option1","option2"]

//     for(let values of valueToChek) {
//         await page.check(`input[value="${values}"]`)
//     }

//     for (let values of valueToChek){
//         const isChecked = await page.locator(`input[value="${values}"]`).isChecked()
//         expect(isChecked).toBe(true);
//     }

//     await page.pause()

// })