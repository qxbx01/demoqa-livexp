const { test, expect } = require('@playwright/test');
const BooksPage = require('../pages/booksPage');  // Import the books page

test.describe('Pagination tests', () => {
    let booksPage;

    test.beforeEach(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        // Instance of the books page
        booksPage = new BooksPage(page);

        // Navigate to the books page
        await booksPage.navigate();

        // Close the cookie banner if present
        await booksPage.closeCookieBannerIfVisible();
    });

    test('Should display only 5 books on the first page after pagination change', async () => {
        await booksPage.setPaginationToFive();
        const isPaginationCorrect = await booksPage.verifyFiveBooksDisplayed();
        expect(isPaginationCorrect).toBe(true);
    });
});
