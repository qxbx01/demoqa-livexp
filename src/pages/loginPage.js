const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginPath = '/login';
        this.userNameField = '#userName';
        this.passwordField = '#password';
        this.loginButton = '#login';
        this.userNameLabel = '#userName-value';
        this.errorMessage = '#name';
    }

    // Navigate to the login page path
    async navigate() {
        await super.navigate(this.loginPath);
        }

    // Logic to perform login
    async login(username, password) {
        await this.page.fill(this.userNameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    // Verify successful login
    async isLoggedIn(expectedUserName) {
        await this.page.waitForSelector(this.userNameLabel);
        const actualUserName = await this.page.textContent(this.userNameLabel);
        return actualUserName.trim() === expectedUserName;
    }

    // Verify the error message matches the expected text
    async verifyErrorMessage(expectedMessage) {
        const actualMessage = await this.page.textContent(this.errorMessage);
        return actualMessage.trim();
    }
}
module.exports = LoginPage;
