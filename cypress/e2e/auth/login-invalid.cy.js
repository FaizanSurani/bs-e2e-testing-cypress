import LoginPage from "../../pages/LoginPage";

describe("Login Tests", () => {
  const loginPage = new LoginPage();

  beforeEach(function () {
    cy.fixture("users").then((users) => {
      this.users = users;
    });
  });

  it("TC_02 - Login with invalid credentials", function () {
    loginPage.visit();
    loginPage.enterEmail(this.users.validUser.email);
    loginPage.enterPassword("test");
    loginPage.clickLogin();

    cy.on("window:alert", (text) => {
      expect(text).to.contain("Trying Logging");
    });
  });
});
