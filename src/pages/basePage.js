class BasePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = 'https://demoqa.com';
        this.cookieCloseButtonSelector = '#dismiss-button';
    }

    // Navigate to a specific path on the base URL
    async navigate(path = '') {
        await this.page.goto(`${this.baseUrl}${path}`);
    }

    // Close the cookie banner if it is visible on the page
    async closeCookieBannerIfVisible() {
        if (!this.cookieCloseButtonSelector) {
            throw new Error('Cookie banner selector is undefined');
        }

        const closeButton = this.page.locator(this.cookieCloseButtonSelector);
        if (await closeButton.isVisible()) {
            await closeButton.click();
        }
    }
}

module.exports = BasePage;
