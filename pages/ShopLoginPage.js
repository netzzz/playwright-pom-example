import { expect } from '@playwright/test';
import { generateRandomEmail, generateRandomName } from '../helpers/stringDataGeneration.js';

export class ShopLoginRegistrationPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.switchFormButton = page.locator("p.login-wrapper-footer-text a");
        this.firstNameFormInput = page.locator("#firstName");
        this.lastNameFormInput = page.locator("#lastName");
        this.emailFormInput = page.locator("#userEmail");
        this.mobileNumberFormInput = page.locator("#userMobile");
        this.occupationFormInput = page.locator("[formcontrolname='occupation']");
        this.maleGenderFormInput = page.locator("[value='Male']");
        this.passwordFormInput = page.locator("#userPassword");
        this.confirmPasswordFormInput = page.locator("#confirmPassword");
        this.ageConfirmationFormInput = page.locator("[formcontrolname='required']");
        this.submitFormButton = page.locator("[type=submit]");
    }

    async goto() {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    // specific element actions:

    async switchForm() {
        await this.switchFormButton.click();
    }

    async fillFirstName(firstName) {
        await this.firstNameFormInput.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.lastNameFormInput.fill(lastName);
    }

    async fillEmail(email) {
        await this.emailFormInput.fill(email);
    }

    async fillMobileNumber(mobileNumber) {
        await this.mobileNumberFormInput.fill(mobileNumber);
    }

    async selectOcupation(ocupation){
        await this.occupationFormInput.selectOption(ocupation);
    }

    async selectMaleGender(){
        await this.maleGenderFormInput.click();
    }

    async fillPassword(password){
        await this.passwordFormInput.fill(password);
    }

    async confirmPassword(password){
        await this.confirmPasswordFormInput.fill(password);
    }

    async verifyAge(){
        await this.ageConfirmationFormInput.click();
    }

    async submitForm(){
        await this.submitFormButton.click();
    }
    

    // whole form functions:

    async submitRegistrationFormRandomValues() {
        await this.fillFirstName(generateRandomName());
        await this.fillLastName(generateRandomName());
        await this.fillEmail(generateRandomEmail());
        await this.fillMobileNumber("1112223334");
        await this.selectOcupation("Student");
        await this.selectMaleGender();
        await this.fillPassword("Password1!");
        await this.confirmPassword("Password1!");
        await this.verifyAge();
        await this.submitForm();
    }

    async submitLoginFormSpecificValues(email, password){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.submitForm();
    }

    // verification functions

    async expectTextToBeVisible(text){
        await expect(this.page.getByText(text)).toBeVisible();
    }
    
}
