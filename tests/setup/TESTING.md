## 🎬 Movie Explorer – Test Setup Guide

This project includes a robust testing framework using **Jest** for unit testing and **Cypress** for end-to-end (E2E) testing. All tests are organized within a dedicated `tests/` directory to maintain a clean separation from application code.

---

## 🧪 Testing Frameworks

### ✅ Jest – Unit Testing

**Jest** is used to test JavaScript functions and logic in isolation.

#### 📦 Installation

```bash
npm install --save-dev jest@26.6.3
```

 ## Scripts (package.json)
 ```js
"scripts": {
  "test": "jest",
  "test:watch": "jest --watchAll"
}
```

### Running Unit Tests
```
npm test
 or
npm run test:watch
```

### Cypress – End-to-End Testing
Cypress is used for simulating user interactions and verifying app behavior in the browser.

📦 Installation

npm install --save-dev cypress


### Scripts (package.json)
```
"scripts": {
  "test:e2e": "cypress open",
    "test:e2e:run": "cypress run",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
}
```


### Running Cypress 
```
npm run test:e2e
 ```
 This opens the Cypress test runner UI where you can run and debug E2E tests.


 ### Folder Structure 
```
 /tests
  ├── jest/
  │   └── example.test.js        # Unit tests using Jest
  └── cypress/
      ├── e2e/
      │   └── movies.cy.js     # Cypress E2E test
      ├── fixtures/
      ├── support/
      │   └── e2e.js             # Cypress setup/support file
      └── cypress.config.js      # Cypress config

  ```

### Cypress Configuration (cypress.config.js)

```js
// tests/cypress/cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Change to match your local server
    specPattern: "tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/cypress/support/e2e.js"
  },
});
```

🔧 Manual Script Testing
If you’re debugging locally before automating tests, run these scripts directly in the browser console:

1. Test the Data Fetching

```js
fetch('assets/js/json/movies-data.json')
  .then(res => res.json())
  .then(data => console.log(data));
```
 📌Expected: Console should display an array of movie objects.

 2. Inspect Global Movie Data

 ```js
 console.log(allMovies);
```
📌 Expected: allMovies contains the parsed movie data array.

 3. Test Filtering Functionality
 
 ```js
 searchInput.value = "ballerina"; // Or another keyword
filterAndSortMovies(allMovies);
```
📌 Expected: The movie list should filter to show matching results.

4. Force Re-render

```js
renderMovies(allMovies);
```
📌 Expected: All available movies are re-rendered in the UI.

## Notes 
All tests live under the /tests directory to isolate them from production code.

Ensure your app is running locally before running Cypress tests.

package-lock.json is committed to ensure consistent installs across environments.