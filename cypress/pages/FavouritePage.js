class FavouritePage {
  visit() {
    cy.visit("/all-books");
  }
  openFirstBook() {
    cy.get('[data-testid="book-card"]').first().click();
  }
  addToFavourites() {
    cy.get('[data-testid="add-to-favourite"]').first().click();
  }
  openFavourites() {
    cy.contains("Profile").click();
  }
  verifyFavourites() {
    cy.contains("Remove").should("be.visible");
  }
  removeFromFavourites() {
    cy.contains("Remove").click()
  }
}

export default FavouritePage;
