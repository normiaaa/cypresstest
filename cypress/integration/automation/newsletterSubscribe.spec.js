import { generateRandomEmail } from '../../utils';

describe('Subscribe to the newsletter', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });


    it('Subscribe unregistered user', () => {
        cy.get('#newsletter-input').type(generateRandomEmail());
        cy.get('button[name="submitNewsletter"]').click();
        cy.get('.alert').invoke('text').should('contains', 'Newsletter : You have successfully subscribed to this newsletter.');
    });

    it('Subscribe already subscribed user', () => {
        cy.get('#newsletter-input').type('nsg@dada.com').should('have.value', 'nsg@dada.com');
        cy.get('button[name="submitNewsletter"]').click();
        cy.get('.alert').invoke('text').should('contains', 'Newsletter : This email address is already registered.')
    });

});