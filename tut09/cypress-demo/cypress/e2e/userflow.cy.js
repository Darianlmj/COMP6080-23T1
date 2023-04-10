describe("user happy path", () => {
  it("should navigate to the home screen successfully", () => {
    cy.visit("localhost:3002/");
    cy.url().should("include", "localhost:3002");
  });

  it("should navigate to the login screen successfully", () => {
    cy.get('button[name="login-button"]').click();
    cy.url().should("include", "localhost:3002/login");
  });

  it("should login successfully", () => {
    cy.get('input[name="email"]')
      .type("randomEmail@email.com");
    cy.get('input[name="password"]')
      .type("random password");

    cy.get('button[name="submit"]').click();
    cy.url().should("include", "localhost:3002/dashboard");
  });

  it("should upload a file successfuly", () => {
    cy.get('input[name="image"]').selectFile("src/assets/shiba.jpeg");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(6000);
    cy.get('img[name="image-preview"]').should("be.visible");
  });

  it("log out successfully", () => {
    cy.get('button[name="logout-button"]').click();
    cy.url().should("include", "localhost:3002/");
  });
});
