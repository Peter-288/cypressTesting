describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
  cy.contains('Test Cases')
  .click()
cy.contains('Test Cases').should('contain',"Test Cases")













  })
})