import { generateRandomEmail } from '../../utils';

describe('Check the Contact form', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });

    it('Should correctly complete and submit the contact form', () => {
        cy.get('#contact-link > a').click();
        cy.get('#id_contact').select('Customer service');
        cy.get('#email').type(generateRandomEmail());
        cy.get('#id_order').type('113819');
        cy.get('#message').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        cy.get('#submitMessage').click();
        cy.get('.alert').invoke('text').should('contains', 'Your message has been successfully sent to our team.');
    });

});