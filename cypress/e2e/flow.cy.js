import { faker } from '@faker-js/faker'

describe('Complete Purchase Flow with Random Data', () => {
  it('Login → Add item → Checkout → Finish with generated user info', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const zipCode = faker.location.zipCode()

    cy.checkoutInfo(firstName, lastName, zipCode)
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })
})
