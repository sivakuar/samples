import {test , expect  } from "@playwright/test";

test.only('dynamic dropdown',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const input=await page.locator('[id="autocomplete"]');
    const dropdownoption=await page.locator('.ui-menu-item div'); 
    let option=await dropdownoption.allTextContents();
    const countryToselect='India';
    for (let i=0;i<option.length;i++){
        if(option[i].trim()===countryToselect){
            await dropdownoption.nth(i).click();
            break;

        }
    }
    await page.pause()
    
})