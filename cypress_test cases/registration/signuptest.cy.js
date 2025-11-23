describe("Sign In ", () => {
  it("sign in with a new name and email ", () => {
    cy.visit("https://automationexercise.com/login");

    cy.get('[data-qa="signup-name"]').type("Jeffrey");

    cy.get('[data-qa="signup-email"]').type("jeffrayssssssss@gmail.com");

    cy.get('[data-qa="signup-button"]').click();

    cy.get('[data-qa="password"]').type("hensel");

    cy.get('[data-qa="first_name" ]').type("jeffrey");
    cy.get('[data-qa="last_name" ]').type("herbert");
    cy.get('[data-qa="address"]').type("Holunderstraße 7");
    cy.get('[data-qa="state"]').type("Texas");
    cy.get('[data-qa="city"]').type("Dallas");
    cy.get('[data-qa="zipcode"]').type("26");
    cy.get('[data-qa="mobile_number"]').type("84929372898");
    cy.get('[data-qa="create-account"]').click("");
    cy.get('[data-qa="continue-button"]').click("");
    it("login and logout  ", () => {
      cy.contains("Logout").click();
      cy.get('[data-qa="login-email"]').type("jeffrayssssssss@gmail.com");
      cy.get('[data-qa="login-password"]').type("hensel");
      cy.get('[data-qa="login-button"]').click();
      it("account deleate  ", () => {
        cy.contains("Delete Account").click();
        cy.get('[data-qa="continue-button"]').click("");
        cy.contains("Login").click("");
      });
    });
  });
});
