class CartPage {
    openCart() {
        cy.contains('Cart').click()
    }

    verifyBookInCart() {
        cy.contains('Place Your Order').should('be.visible')
    }
}

export default CartPage