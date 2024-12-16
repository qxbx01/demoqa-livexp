const BasePage = require('./basePage');

class BooksPage extends BasePage {
    constructor(page) {
        super(page);
        this.booksPath = '/books';
        this.searchField = '#searchBox';
        this.bookList = '.rt-td a';
        this.paginationDropdown = 'select[aria-label="rows per page"]';
    }

    // Navigate to the books page
    async navigate() {
        await super.navigate(this.booksPath);
    }

    // Search for a specific book
    async searchForBook(bookName) {
        await this.page.fill(this.searchField, bookName);
        await this.page.keyboard.press('Enter');
    }

    // Verify only the specified book appears in the search results
    async verifyBookInResults(bookTitle) {
        const bookTitles = await this.page.locator(this.bookList).allTextContents();
        const filteredTitles = bookTitles.filter(title => title).map(title => title.trim());
        return filteredTitles.length === 1 && filteredTitles.includes(bookTitle.trim());
    }

    // Set pagination to display 5 rows per page
    async setPaginationToFive() {
        await this.page.selectOption(this.paginationDropdown, '5');
        await this.page.waitForLoadState('networkidle'); // Wait for the page to finish loading
    }

    // Verify exactly 5 books are displayed on the page
    async verifyFiveBooksDisplayed() {
        const bookCount = await this.page.locator(this.bookList).count();
        return bookCount === 5;
    }
}

module.exports = BooksPage;
