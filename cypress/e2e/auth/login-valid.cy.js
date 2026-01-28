import LoginPage from "../../pages/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.users = users;
    });
  });

  it("TC_01 - Login with valid credentials", function () {
    loginPage.visit();
    loginPage.enterEmail(this.users.validUser.email);
    loginPage.enterPassword(this.users.validUser.password);
    loginPage.clickLogin();

    cy.url().should("include", "/");

    cy.contains('Profile').should('be.visible')
  });

});
