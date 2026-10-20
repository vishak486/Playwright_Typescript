import { test, expect } from '@playwright/test'
import { LoginPage } from "./pages/LoginPage"
import { readCSV } from '../utils/csvReader'

// CSV Data Driven Login test

const loginData=readCSV("test-data/LoginData.csv")

loginData.forEach((data:any) => {
    if (data.run!=='true') return;
    test(`Login Test ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.Login(
            data.username,
            data.password
        );
        if (data.expected === "success") {
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
        }
        else {
            await expect(loginPage.errorMessage).toBeVisible();
        }

    });
})

