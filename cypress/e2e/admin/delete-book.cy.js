import LoginPage from "../../pages/LoginPage";
import AdminBookPage from "../../pages/AdminPage";
import BookListPage from "../../pages/BookListPage";

describe("Admin - Book Management", () => {
  const loginPage = new LoginPage();
  const adminBookPage = new AdminBookPage();
  const bookListPage = new BookListPage();

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      loginPage.visit();
      loginPage.enterEmail(users.adminUser.email);
      loginPage.enterPassword(users.adminUser.password);
      loginPage.clickLogin();
    });

    cy.contains("Profile").should("be.visible");
  });

  it("TC_17 - Delete a book", () => {
    bookListPage.visit();
    bookListPage.openFirstBook();

    adminBookPage.deleteBook();
  });
});
