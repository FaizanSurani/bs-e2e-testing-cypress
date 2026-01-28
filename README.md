# Book Store Automation Testing (Cypress)

## Project Overview
End-to-end automation testing of a Book Store web application using Cypress.
Covers user flows, cart, favourites, orders, and admin CRUD operations.

## Tech Stack
- Cypress
- JavaScript
- Page Object Model (POM)
- REST API interception

## Test Coverage
### Authentication
- Login / Logout

### User Features
- Browse books
- Add / Remove from cart
- Add / Remove favourites
- Place order

### Admin Features
- Add new book
- Update book details
- Delete book

## Key Automation Concepts Used
- Page Object Model
- data-testid selectors
- cy.intercept() for API validation
- Assertions on UI and backend behavior

## Known Issues (Found via Automation)
- Book list does not refresh immediately after add/update without reload
  (UI state management issue)

## How to Run Tests
```bash
npm install
npx cypress open
