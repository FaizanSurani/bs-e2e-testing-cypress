import LoginPage from "../../pages/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.users = users;
    });
  });

  it("TC_03 - Logout functionality", function () {
    loginPage.visit();
    loginPage.enterEmail(this.users.validUser.email);
    loginPage.enterPassword(this.users.validUser.password);
    loginPage.clickLogin();

    cy.contains("Profile").should("be.visible");

    cy.contains('Profile').click()
    cy.contains('Logout').click()
    
    cy.url().should("include", "/");
    cy.contains("Login").should("be.visible");
    });
});
