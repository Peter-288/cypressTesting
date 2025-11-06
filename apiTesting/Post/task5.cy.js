it("to search product", () => {
  cy.request("post", "https://automationexercise.com/api/searchProduct").should(
    (response) => {
      expect(response.status).to.eq(200);
    }
  );
});
