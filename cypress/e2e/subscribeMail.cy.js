describe('subscribe to the news ', () => {
  it('enter you email and get informations about price fall and so on', () => {
   
    cy.visit('https://automationexercise.com')
  
  cy.contains('Cart')
  .click()
  cy.get('#susbscribe_email')
  .type('hhfhfhfhf@mail.dot')
  cy.get('#subscribe')
  .click()

   
  cy.get('#susbscribe_email')
  .type('hhfhfhfhf@mail.dot')
  cy.get('#subscribe')
  .click()
  cy.contains('You have been successfully subscribed!').should('contain',"You have been successfully subscribed!")








    })

})