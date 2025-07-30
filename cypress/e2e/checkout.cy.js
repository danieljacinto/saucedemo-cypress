import { faker } from '@faker-js/faker'

describe('Checkout - Information and Completion with Random Data', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('Fill user info with random values and continue', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const zipCode = faker.location.zipCode()

    cy.checkoutInfo(firstName, lastName, zipCode)
    cy.url().should('include', 'checkout-step-two')
  })

  it('Try to continue without filling required fields', () => {
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'First Name is required')
  })

  it('Finish order with random user info', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const zipCode = faker.location.zipCode()

    cy.checkoutInfo(firstName, lastName, zipCode)
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain', 'Thank you for your order!')
  })
})
