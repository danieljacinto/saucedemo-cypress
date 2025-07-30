describe('Login - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login with valid user', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Login with incorrect password', () => {
    cy.login('standard_user', 'wrong_password')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Login with blank username', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })

  it('Login with blank password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })

  it('Login with locked out user', () => {
    cy.login('locked_out_user', 'secret_sauce')
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })
})
