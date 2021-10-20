/// <reference types="cypress" />

describe("First test", () => {
    it("should visit home page", () => {
      cy.visit("http://localhost:4200");
      cy.get('#number').type('0547347529');
      cy.get('mat-select[formcontrolname="country_code"]').click();
cy.get('mat-option').contains('GH').click();
  cy.get('#btn-test').click();
    //   cy.get("#country_code").select('GH{enter}');
    //   cy.get("mat-select.mat-select").type('GH');
    // //   cy.get('#btn-test').click();
    // cy.get('#country_code').click() 

// cy.get('mat-select.mat-select').each(($ele) => {
//     if ($ele.text() == "GH") {
//         cy.wrap($ele).click()
//     }
// })
    });
   
  });

