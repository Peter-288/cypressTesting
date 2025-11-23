//TODO:Provide some information in comments about the testcase
/**
 * This file is about automating various test scenarios related to Contact Us form.
 **/
describe(" should test contact us form with validations", () => {
  //TODO:Implement beforeEach, move cy.visit in beforeEach
  // Description of every testcase
  it("user should be able to submit the contact form", () => {
    cy.visit("https://automationexercise.com");

    cy.contains("Contact us").click();
    cy.get('[data-qa="name"]').type("franklin");
    cy.get('[data-qa="email"]').type("roosevelt@gmail.nope");
    cy.get('[data-qa="subject"]').type("Problems with the payment");
    cy.get('[data-qa="message"]').type(
      "My credit card doesnt work. Can I pay in cash "
    );
    cy.get("input[type=file]").selectFile("cypress/fixtures/images/2_1MVQ.jpg");
    cy.get('[data-qa="submit-button"]').click();
  });

  // Description of every testcase
  it("user should get error if email is not provided", () => {});

  // Description of every testcase
  it("user should not be able to submit the form, if details are not provided", () => {
    cy.get('[data-qa="submit-button"]').click();
    cy.get('[data-qa="email"]').should(
      "have.text",
      "Please fill out this field."
    );
  });
});
