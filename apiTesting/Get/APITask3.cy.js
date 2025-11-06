it("Get Api all brands list", () => {
  cy.request("GET", " https://automationexercise.com/api/brandsList").should(
    (response) => {
      expect(response.status).to.eq(200);
    }
  );
});
