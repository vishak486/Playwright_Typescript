import {test,expect} from '@playwright/test'
import { LoginPage } from "../tests/pages/LoginPage"

test("Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.Login('standard_user','secret_sauce');
    await loginPage.verifyLoginSuccess();
})