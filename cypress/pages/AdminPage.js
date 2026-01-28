class AdminPage {
  openAddBookPage() {
    cy.visit("/profile/addBooks");
  }

  fillBookForm(book) {
    cy.get('[data-testid="book-url"]').type(book.url);
    cy.get('[data-testid="book-title"]').type(book.title);
    cy.get('[data-testid="book-language"]').type(book.language);
    cy.get('[data-testid="book-author"]').type(book.author);
    cy.get('[data-testid="book-price"]').type(book.price);
    cy.get('[data-testid="book-description"]').type(book.description);
  }

  submitBook() {
    cy.get('[data-testid="add-book-btn"]').first().click()
  }

  verifyBookAdded() {
    cy.contains(/book added|success/i).should('be.visible');
  }

  updateBookForm(book) {
    cy.get('[data-testid="book-url"]').clear().type(book.url);
    cy.get('[data-testid="book-title"]').clear().type(book.title);
    cy.get('[data-testid="book-language"]').clear().type(book.language);
    cy.get('[data-testid="book-author"]').clear().type(book.author);
    cy.get('[data-testid="book-price"]').clear().type(book.price);
    cy.get('[data-testid="book-description"]').clear().type(book.description);
  }

  openUpdateBook() {
    cy.get('[data-testid="edit-book-btn"]').click()
  }

  submitUpdate() {
    cy.get('[data-testid="update-book-btn"]').first().click()
  }

  deleteBook() {
    cy.get('[data-testid="delete-book-btn"]').first().click()
  }
}

export default AdminPage