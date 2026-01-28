class LoginPage {
    visit() {
        cy.visit("/login");
    }

    enterEmail(email) {
        cy.get('input[type="email"]').type(email)
    }

    enterPassword(password) {
        cy.get('input[type="password"]').type(password)
    }

    clickLogin() {
        cy.contains('Sign In').click()
    }
}

export default LoginPage