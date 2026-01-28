import LoginPage from "../../pages/LoginPage"
import BookListPage from "../../pages/BookListPage"
import FavouritePage from "../../pages/FavouritePage"

describe("Favourite Tests", () => {
  const loginPage = new LoginPage()
  const favouritePage = new FavouritePage()

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      loginPage.visit()
      loginPage.enterEmail(users.validUser.email)
      loginPage.enterPassword(users.validUser.password)
      loginPage.clickLogin()
    })

    cy.contains("Profile").should("be.visible")
  })

  it("TC_14 - Remove Book from favourites", () => {
    favouritePage.openFavourites()

    favouritePage.verifyFavourites()

    favouritePage.removeFromFavourites()
  })
})
