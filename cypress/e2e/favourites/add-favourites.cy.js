import LoginPage from "../../pages/LoginPage"
import BookListPage from "../../pages/BookListPage"
import FavouritePage from "../../pages/FavouritePage"

describe("Favourite Tests", () => {
  const loginPage = new LoginPage()
  const bookListPage = new BookListPage()
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

  it("TC_12 - Add book to favourites", () => {
    bookListPage.visit()

    bookListPage.openFirstBook()

    favouritePage.addToFavourites()

    favouritePage.openFavourites()

    favouritePage.verifyFavourites()
  })
})
