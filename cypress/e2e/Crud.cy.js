describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });
  it("add user without entering any details", () => {
    cy.get("#adduserbutton").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Fill the required fields");
    });
  });
  it("checking for the details", () => {
    cy.get("#name-input").type("RK");
    cy.get("#age-input").type("23");
    cy.get("#colour-input").type("black");
    cy.get("#adduserbutton").click();
    cy.wait(4000);
  });

  it("deleting for the details", () => {
    cy.get(".delete-btn").last().click();
    cy.wait(4000);
    cy.get(".tableclass").contains("RK");
  });
});
