class OrderPage {
  placeOrder() {
    cy.contains("Place Your Order").click();
  }

  openOrderHistory() {
    cy.contains("Profile").click();
    cy.contains(/order history|orders/i).click();
  }

  verifyOrderConfirmation() {
    cy.visit("/profile/orderHistory");
    cy.contains(/order | placed | success/i).should("be.visible");
  }
}

export default OrderPage