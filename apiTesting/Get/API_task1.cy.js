it("Get Api all products list", () => {
  cy.request("GET", "https://automationexercise.com/api/productsList").should(
    (response) => {
      expect(response.status).to.eq(200);
    }
  );
});
