# Students API Test Automation with Cypress

This project automates API testing for a **Student Management System** using Cypress. The tests cover various API endpoints, including fetching student details, creating new students, and adding technical skills to student profiles. The project is also integrated with **Mochawesome** to generate detailed HTML reports.

## Project Overview

- **Test Framework**: [Cypress](https://www.cypress.io/)
- **Reporting**: [Mochawesome](https://www.npmjs.com/package/mochawesome)
- **Language**: JavaScript (ES6 Modules)
- **Purpose**: Automate API testing and generate detailed test reports for REST API endpoints related to student management.
  
## Features

1. **API Testing**: Covers all main API functionalities including:
   - Fetching student details
   - Creating new students
   - Adding technical skills
   - Validating API status codes and response structures

2. **Test Structure**: Utilizes Cypress with the Page Object Model (POM) for scalable and maintainable code.

3. **Reporting**: Generates rich HTML test reports using Mochawesome, providing detailed insights into test results.

## Test Suite

The test suite focuses on the following API endpoints:
- **Get Student Details**: Validates the status code and ensures that the student list is retrieved.
- **Create Student**: Creates a new student and validates the response.
- **Get Specific Student**: Fetches details of a specific student and checks if the fields are correct.
- **Create Technical Skills**: Adds technical skills to an existing student profile and verifies the response.

## Prerequisites

Make sure you have the following installed:
- Node.js (v14+)
- npm (v6+)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/students-api-test-automation.git
   cd students-api-test-automation
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. To run the tests:
   ```bash
   npx cypress run
   ```

4. Generate the HTML report (Mochawesome):
   After running the tests, generate the Mochawesome report:
   ```bash
   npx mochawesome-merge cypress/reports/*.json > mochawesome-merged.json
   npx marge mochawesome-merged.json --reportDir cypress/reports --inline
   ```

   The report will be generated at `cypress/reports/mochawesome-report.html`. You can open it in your browser to view the results.

## How to Run the Tests

### 1. Run All Tests
   ```bash
   npx cypress run
   ```

### 2. Run a Specific Test File
   ```bash
   npx cypress run --spec "cypress/e2e/api-tests/student.cy.js"
   ```

### 3. Open Cypress Test Runner (for Debugging)
   ```bash
   npx cypress open
   ```

## Report

- HTML reports are generated using **Mochawesome**.
- The generated report is located in `cypress/reports/mochawesome-report.html`.
  
Here’s a summary of the latest test run:
- **Total Tests**: 5
- **Passed**: 5
- **Failed**: 0
- **Skipped**: 0
- **Duration**: 705 ms

You can find the full report here: [Mochawesome Report](./cypress/reports/mochawesome-report.html)

![Mochawesome Report Screenshot](path-to-your-screenshot.png)

## Project Structure

```
/cypress
  /e2e
    /api-tests
      student.cy.js         # API test cases for student management system
  /page-objects
      studentAPI.js         # Page Object Model for API interactions
  /reports                  # Mochawesome test reports
  /fixtures                 # Test data files (if any)
```

## Technologies Used

- **Cypress**: End-to-end testing framework for API testing.
- **Mochawesome**: Custom reporter to generate HTML and JSON reports for Cypress tests.
- **Node.js**: JavaScript runtime for running the tests.
- **JavaScript (ES6)**: Used for writing test scripts and Page Object Model.

## CI/CD Integration

To integrate the tests with a CI/CD pipeline, ensure that the `npm install` and `npx cypress run` commands are executed in the test phase. You can also integrate the Mochawesome report generation and upload it as an artifact in your CI pipeline.

## How It Works

The tests use the **Cypress** test runner to make HTTP requests to the API endpoints. The results are validated using assertions (e.g., checking status codes and response body). The **Mochawesome** reporter captures the test results and generates a detailed HTML report, which can be viewed in any browser.



