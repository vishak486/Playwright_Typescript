import {test,expect} from '@playwright/test'
import { LoginPage } from "../tests/pages/LoginPage"
import  loginData  from '../test-data/loginData.json'

test("Valid Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
   // await loginPage.Login('standard_user','secret_sauce');
    await loginPage.Login(
        loginData.validUser.username,
        loginData.validUser.password
    );

   // await loginPage.verifyLoginSuccess();

   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})

test("Invalid Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
   // await loginPage.Login('standard_user','secret_sauce');
    await loginPage.Login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

   // await loginPage.verifyLoginSuccess();

   await expect(loginPage.errorMessage).toBeVisible();
})