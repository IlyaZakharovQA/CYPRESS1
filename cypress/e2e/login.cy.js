describe("Login user", () => {
  it("Open page", () => {
    cy.visit("/");
    cy.contains("Books list");
  });

  it("Correct email and password", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru");
  });

  it("Empty email", () => {
    cy.visit("/");
    cy.login(" ", "123");
    cy.get("#mail").then(($el) => cy.log($el));
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
});
