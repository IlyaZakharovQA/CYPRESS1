describe("add tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login("test@test.com", "test");
  });

  it("Favorite page opened", () => {
    cy.get("span.pt-2").should("have.text", "Добро пожаловать test@test.com");
  });

  it("Open book", () => {
    cy.contains("Log out").click();
    cy.contains("Books list").should("be.visible");
    cy.contains("title1").should("be.visible");
    cy.contains("author1").should("be.visible");
  });

  it("Add a book", () => {
    cy.typeForm(
      "The Lord of the Rings",
      "J. R. R. Tolkien",
      "J. R. R. Tolkien"
    );
    cy.contains("Submit").click();
    cy.contains("The Lord of the Rings");
  });
});
