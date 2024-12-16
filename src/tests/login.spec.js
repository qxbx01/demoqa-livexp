const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test.describe('Login tests', () => {
    let loginPage;
    const validUsername = 'UserNameTest2';
    const validPassword = 'Password!1';

    const invalidUsername = 'UserNameInvalid';
    const invalidPassword = 'PasswordInvalid';
    const expectedErrorMessage = 'Invalid username or password!'


    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        // Instance of the login page
        loginPage = new LoginPage(page);

        // Navigate to the login page
        await loginPage.navigate();
        // Close the cookie banner if present
        await loginPage.closeCookieBannerIfVisible();
    });

    test('User should login successfully with valid credentials', async () => {
        await loginPage.login(validUsername, validPassword);
        const isLoggedIn = await loginPage.isLoggedIn(validUsername);
        expect(isLoggedIn).toBe(true);
    });

    test('Should display an error message for invalid credentials', async () => {
        await loginPage.login(invalidUsername, invalidPassword);
        const errorMessage = await loginPage.verifyErrorMessage();
        expect(errorMessage).toBe(expectedErrorMessage);
    });
});
