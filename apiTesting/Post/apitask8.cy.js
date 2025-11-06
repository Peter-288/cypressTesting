it("verify all products", () => {
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/verifyLogin",
    failOnStatusCode: false,
  }).then((res) => {
    console.log("response is" + res);
    const parsedBody = JSON.parse(res.body);
    expect(parsedBody.responseCode).to.eq(400);
  });
});
