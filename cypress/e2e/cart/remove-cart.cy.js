import LoginPage from "../../pages/LoginPage";
import CartPage from "../../pages/CartPage";

describe("Cart Tests", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      loginPage.visit();
      loginPage.enterEmail(users.validUser.email);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLogin();
    });

    cy.contains("Profile").should("be.visible");
  });

  it("TC_09 - Remove book from cart", function () {
    cartPage.openCart();
    cartPage.verifyBookInCart();

    cy.get('[data-testid="remove-cart-item"]').then(($items) => {
      const initialCount = $items.length;

      cy.get('[data-testid="remove-cart-item"]').first().click();

      cy.get('[data-testid="remove-cart-item"]').should(
        "have.length.lessThan",
        initialCount,
      );
    });
  });
});
