import LoginPage from "../../pages/LoginPage";
import CartPage from "../../pages/CartPage";
import BookListPage from "../../pages/BookListPage";
import OrderPage from "../../pages/OrderPage"

describe("Order Tests", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const bookListPage = new BookListPage();
  const orderPage = new OrderPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      loginPage.visit();
      loginPage.enterEmail(users.validUser.email);
      loginPage.enterPassword(users.validUser.password);
      loginPage.clickLogin();
    });

    cy.contains("Profile").should("be.visible");
  });

  it("TC_10 - Place order successfully", function () {
    bookListPage.visit();
    bookListPage.openFirstBook();
    bookListPage.addToCart();

    cartPage.openCart();
    cartPage.verifyBookInCart();

    orderPage.placeOrder();
    orderPage.openOrderHistory();
    orderPage.verifyOrderConfirmation();
  });
});
