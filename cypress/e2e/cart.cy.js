describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_link').click()
  })

  it('Should display correct item in cart', () => {
    cy.get('.cart_item').should('have.length', 1)
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bike Light')
  })

  it('Remove item from cart', () => {
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.get('.cart_item').should('not.exist')
  })

  it('Proceed to checkout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', 'checkout-step-one')
  })
})
