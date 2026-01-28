import LoginPage from "../../pages/LoginPage";
import CartPage from "../../pages/CartPage";
import BookListPage from "../../pages/BookListPage";

describe("Cart Tests", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const bookListPage = new BookListPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      loginPage.visit();
      loginPage.enterEmail(users.validUser.email);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLogin();
    });

    cy.contains("Profile").should("be.visible");
  });

  it("TC_08 - Add book to cart", function () {
    bookListPage.visit();
    bookListPage.openFirstBook();
    bookListPage.addToCart();

    cartPage.openCart();
    cartPage.verifyBookInCart();
  });
});
