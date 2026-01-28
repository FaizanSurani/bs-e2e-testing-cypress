class BookListPage {
  visit() {
    cy.visit("/all-books");
  }
  openFirstBook() {
    cy.get('[data-testid="book-card"]').first().click()
  }
  addToCart() {
    cy.get('[data-testid="add-to-cart"]').first().click();
  }
}

export default BookListPage;
