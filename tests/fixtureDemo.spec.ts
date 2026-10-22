import {test} from '@playwright/test'

test('Demo Fixture Test 1',async({page})=>{
    console.log("Demo Fixture Test 1")
    await page.goto("https://playwright.dev/")
})

test('Demo Fixture Test 2',async({page})=>{
    console.log("Demo Fixture Test 2")
    await page.goto("https://www.saucedemo.com/")
})