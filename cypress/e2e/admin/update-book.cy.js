import LoginPage from "../../pages/LoginPage"
import AdminBookPage from "../../pages/AdminPage"
import BookListPage from "../../pages/BookListPage"

describe("Admin - Book Management", () => {
  const loginPage = new LoginPage()
  const adminBookPage = new AdminBookPage()
  const bookListPage = new BookListPage()

  const updateBook = {
    url: "https://www.example2.com",
    title: "Automation with Cypress2",
    author: "Senior QA Engineer",
    language: "English",
    price: "399",
    description: "A test book added via Cypress automation"
  }

  beforeEach(() => {
    cy.fixture("users").then((users) => {
      loginPage.visit()
      loginPage.enterEmail(users.adminUser.email)
      loginPage.enterPassword(users.adminUser.password)
      loginPage.clickLogin()
    })

    cy.contains("Profile").should("be.visible")
  })

  it("TC_16 - Update a book", () => {
    bookListPage.visit()
    bookListPage.openFirstBook()

    adminBookPage.openUpdateBook()

    adminBookPage.updateBookForm(updateBook)

    adminBookPage.submitUpdate()

    cy.contains(updateBook.title).should("be.visible")
  })
})
