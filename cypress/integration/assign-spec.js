/// <reference types="cypress" />

describe("Phone Validator", () => {
    beforeEach(() => {
        cy.visit("/");
    })


    it("Submit button should be disabled if form is invalid", () => {

        cy.get(":button").first().should("be.disabled");
    });
    it("Submit button should be enabled if form is valid", () => {
        cy.get('#number').type('0547347529');
        cy.get('mat-select[formcontrolname="country_code"]').click();
        cy.get('mat-option').contains('GH').click();
        cy.get(":button").first().should("be.enabled");
    });

    it("it should check for phone number validity if form is valid", () => {
        cy.get('#number').type('0547347529');
        cy.get('mat-select[formcontrolname="country_code"]').click();
        cy.get('mat-option').contains('GH').click();
        cy.get('#btn-test').click();
        cy.wait(1000)
        cy.get('#toast-container').should('exist')
    });
    it("it should check if phone number is invalid then show an error message invalid", () => {
        cy.get('#number').type('0547529');
        cy.get('mat-select[formcontrolname="country_code"]').click();
        cy.get('mat-option').contains('GH').click();
        cy.get('#btn-test').click();
        cy.wait(1000)
        cy.get('#toast-container').should('exist')
    });
})