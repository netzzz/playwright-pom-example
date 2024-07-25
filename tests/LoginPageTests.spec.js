import{test} from '@playwright/test';
import{ShopLoginRegistrationPage} from '../pages/ShopLoginPage.js';

test('successfull login', async ({page}) => {
    const loginRegistrationPage = new ShopLoginRegistrationPage(page);
    await loginRegistrationPage.goto();
    await loginRegistrationPage.submitLoginFormSpecificValues("testEmail1@gmail.com","testPassword1!")
    await loginRegistrationPage.expectTextToBeVisible("Cart");
})

test('incorrect email login', async ({page}) => {
    const loginRegistrationPage = new ShopLoginRegistrationPage(page);
    await loginRegistrationPage.goto();
    await loginRegistrationPage.submitLoginFormSpecificValues("nonExistingEmail@gmail.com","testPassword1!")
    await loginRegistrationPage.expectTextToBeVisible("Incorrect");
})

test('incorrect password login', async ({page}) => {
    const loginRegistrationPage = new ShopLoginRegistrationPage(page);
    await loginRegistrationPage.goto();
    await loginRegistrationPage.submitLoginFormSpecificValues("testEmail1@gmail.com","wrongPassword1!")
    await loginRegistrationPage.expectTextToBeVisible("Incorrect");
})

test('successful registration', async ({page}) => {
    const loginRegistrationPage = new ShopLoginRegistrationPage(page);
    await loginRegistrationPage.goto();
    await loginRegistrationPage.switchForm();
    await loginRegistrationPage.submitRegistrationFormRandomValues();
    await loginRegistrationPage.expectTextToBeVisible("Account Created Successfully");
})
