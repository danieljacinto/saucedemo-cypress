describe('Inventory - Products', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
  })

  it('Should display a list of products', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('Add and remove item from cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('Sort products by price (low to high)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').first().should('contain', '$7.99')
  })
})