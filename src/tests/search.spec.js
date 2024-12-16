const { test, expect } = require('@playwright/test');
const BooksPage = require('../pages/booksPage');
const BasePage = require('../pages/basePage');

test.describe('Book search tests', () => {
    let booksPage;
    const bookTitle = 'Speaking JavaScript';

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        booksPage = new BooksPage(page);
        await booksPage.navigate();
        await booksPage.closeCookieBannerIfVisible();
    });

    test('Should find only "Speaking JavaScript" book in search results', async () => {
        await booksPage.searchForBook(bookTitle);
        const isBookFound = await booksPage.verifyBookInResults(bookTitle);
        expect(isBookFound).toBe(true);
    });
});
