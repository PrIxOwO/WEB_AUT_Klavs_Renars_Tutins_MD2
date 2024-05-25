describe("Scenario 1", () => {

    it("form", () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get("#btn-make-appointment").click();
        cy.get("#txt-username").type("John Doe");
        cy.get("#txt-password").type("ThisIsNotAPassword");
        cy.get("#btn-login").click();

        cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
        cy.get("#chk_hospotal_readmission").check();
        cy.get("#radio_program_medicaid").check();
        cy.get("#txt_visit_date").type("30/05/2024");
        cy.get("body").click(); //lai neiesprūstu kalendārā
        cy.get("#txt_comment").type("text");

        cy.get("#combo_facility").should("have.value", "Seoul CURA Healthcare Center");
        cy.get("#chk_hospotal_readmission").should("be.checked");
        cy.get("#radio_program_medicaid").should("be.checked");
        cy.get("#txt_visit_date").should("have.value", "30/05/2024");
        cy.get("#txt_comment").should("have.value", "text");

        cy.get("#btn-book-appointment").click();

        

    });
    
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
        });
    });