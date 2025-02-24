## Cypress Testing Project

This repository contains **end-to-end (E2E) tests** written using [Cypress](https://www.cypress.io/) for automated testing of a web application.

## 📌 Features
- 🚀 Fast and reliable UI testing
- 🔍 Automated assertions and validations
- 🌐 API testing support
- 📸 Screenshots & video recording for debugging
- ✅ Continuous Integration (CI) support

---

## 🛠 Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/your-cypress-project.git
cd your-cypress-project
2️⃣ Install Dependencies
Make sure you have Node.js installed (v14+ recommended).

npm install
# OR
yarn install
3️⃣ Open Cypress
npx cypress open
This will launch the Cypress Test Runner.

🚀 Running Tests
Run all tests in headed mode
npx cypress run  
Run a specific test file
npx cypress run --spec cypress/e2e/myTest.cy.js

Run tests in a specific browser (Chrome, Firefox, Edge)
npx cypress run --browser chrome

Run tests in Cypress UI Mode
npx cypress open

📂 Project Structure
📦 your-cypress-project
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e        # Test files (e.g., login.cy.js, dashboard.cy.js)
 ┃ ┣ 📂 fixtures   # Test data (e.g., users.json)
 ┃ ┣ 📂 support    # Custom commands, utilities
 ┣ 📂 videos       # (Auto-generated) Test execution recordings
 ┣ 📂 screenshots  # (Auto-generated) Screenshots of test failures
 ┣ 📜 cypress.config.js  # Cypress configuration file
 ┣ 📜 package.json # Dependencies & scripts
 ┣ 📜 README.md    # Project documentation
🎯 Writing a Simple Cypress Test
Example test file: cypress/e2e/sample.cy.js

describe('My First Cypress Test', () => {
  it('Visits the app and checks the title', () => {
    cy.visit('https://example.com'); // Visit the website
    cy.contains('Example Domain'); // Assert page content
  });
});
🛠 Configuration (cypress.config.js)
Modify cypress.config.js to customize settings:
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com",
    video: true,
    screenshotOnRunFailure: true,
  }
});
🤖 Running Tests in CI/CD (GitHub Actions)
Create .github/workflows/cypress.yml to automate testing.
name: Cypress Tests
on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run
📸 Debugging
Cypress automatically captures screenshots for failed tests (cypress/screenshots).
Video recordings are saved in cypress/videos/ (disable in cypress.config.js).
