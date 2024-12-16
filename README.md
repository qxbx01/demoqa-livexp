# DemoQA Playwright Automated Tests

This repository contains automated tests for the [DemoQA](https://demoqa.com) website, specifically for testing the login and books functionality.
The tests are implemented using Playwright with the Page Object Model (POM) design pattern.

---

## **Features**

The following test scenarios are covered:

1. **Login Test**:
   - Verify that a user can log in with valid credentials.
   - Verify an error message is displayed for invalid credentials.

2. **Search Test**:
   - Search for a book titled **"Speaking JavaScript"**.
   - Verify that only this book is displayed in the search results.

3. **Pagination Test**:
   - Change pagination to display 5 rows per page.
   - Verify that only 5 books are displayed on the first page.

4. **Additional Test**:
   - Verify login fails when invalid credentials are provided.

---

