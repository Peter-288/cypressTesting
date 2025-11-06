it("loginverify", () => {
  cy.request("post", "https://automationexercise.com/api/verifyLogin").should(
    (response) => {
      expect(response.status).to.eq(200);
    }
  );
});
