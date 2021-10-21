/// <reference types="cypress" />

describe("Ernest Assignment test", () => {
    it("it should initialize page", () => {
        cy.visit("http://localhost:4200");
        // cy.get('#number').type('0547347529');
        // cy.get('mat-select[formcontrolname="country_code"]').click();
        // cy.get('mat-option').contains('GH').click();
        // cy.get('#btn-test').click();
});

});

it("should enter a valid ghana number ", () => {
    cy.get('#number').type('0547347529');
  });

it("should select the ghana alpha2code from options ", () => {
         cy.get('mat-select[formcontrolname="country_code"]').click();
         cy.get('mat-option').contains('GH').click();
  });

  it("should click on the button and show success message if number is valid ", () => {
    cy.get('#btn-test').click();
  });
