import { generateRandomEmail } from "../../utils";

describe('Create Account', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it('Should correctly create a new account', () => {
        cy.get('.login').click();
        cy.get('#email_create').type(generateRandomEmail());
        cy.get('#SubmitCreate').click();
        cy.get('#id_gender2').check();
        cy.get('#customer_firstname').type('N');
        cy.get('#customer_lastname').type('Test');
        cy.get('#passwd').type('testing');
        cy.get('#days').select('10');
        cy.get('#months').select('11');
        cy.get('#years').select('1995');
        cy.get('#newsletter').check();
        cy.get('#optin').check();
        cy.get('#company').type('Test');
        cy.get('#address1').type('Testing');
        cy.get('#city').type('Chicago');
        cy.get('#id_state').select('Illinois');
        cy.get('#postcode').type('00000');
        cy.get('#phone').type('111111');
        cy.get('#submitAccount').click();
    });

});