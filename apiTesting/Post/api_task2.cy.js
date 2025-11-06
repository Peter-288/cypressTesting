it("POST API testing products list", () => {
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/productsList",
    failOnStatusCode: false,
  }).then((res) => {
    console.log("response is" + res);
    const parsedBody = JSON.parse(res.body);
    expect(parsedBody.responseCode).to.eq(405);
  });
});
