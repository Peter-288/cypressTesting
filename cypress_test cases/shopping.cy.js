describe("shopping", () => {
  it("select and put the products in the cart", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Products").click();
    cy.get("#search_product").type("polo");
    cy.get("#submit_search").click();
    cy.get('[data-product-id="30"]').first().click().click();
    cy.contains("Continue Shopping").click();
    cy.get('[data-product-id="30"]').first().click().click();
    cy.contains("Continue Shopping").click();
    cy.get('[href="/product details/]').click();
    cy.contains("View Cart").click();
    f;
    cy.contains("Proceed To Checkout").click();
    cy.get('[href="/login"]').click();
  });
});
