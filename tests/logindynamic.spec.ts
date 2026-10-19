import { test, expect } from '@playwright/test'
import { LoginPage } from "./pages/LoginPage"
import loginData from '../test-data/loginDataNew.json'

// Dynamic Data Login test

loginData.forEach((data) => {
    if (!data.run) return;
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

