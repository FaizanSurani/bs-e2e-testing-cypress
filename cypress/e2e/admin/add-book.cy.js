import LoginPage from "../../pages/LoginPage";
import AdminBookPage from "../../pages/AdminPage";
import BookListPage from "../../pages/BookListPage";

describe("Admin - Book Management", () => {
  const loginPage = new LoginPage();
  const adminBookPage = new AdminBookPage();
  const bookListPage = new BookListPage();

  const newBook = {
    url: "https://www.example.com",
    title: "Automation with Cypress",
    author: "QA Engineer",
    language: "English",
    price: "499",
    description: "A test book added via Cypress automation",
  };

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      loginPage.visit();
      loginPage.enterEmail(users.adminUser.email);
      loginPage.enterPassword(users.adminUser.password);
      loginPage.clickLogin();
    });

    cy.contains("Profile").should("be.visible");
  });

  it("TC_15 - Add new book", () => {
    adminBookPage.openAddBookPage();

    adminBookPage.fillBookForm(newBook);

    adminBookPage.submitBook();

    adminBookPage.verifyBookAdded();
  });
});
