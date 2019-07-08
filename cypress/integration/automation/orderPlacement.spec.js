import users from '../../fixtures/users';

describe('Order Placement Test', function() {
    before(() => {
        const { LOGIN } = users;
        const { USERNAME, PASSWORD } = LOGIN;
        cy.visit('http://automationpractice.com/index.php');
        cy.login(USERNAME, PASSWORD);
        cy.visit('http://automationpractice.com/index.php');
    });

    it('Should correctly place an order', () => {
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click();
        cy.get('.first-in-line.last-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
        cy.get('.button-container > .button-medium > span').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.cart_navigation > .button > span').click();
        cy.get('#cgv').check();
        cy.get('.cart_navigation > .button > span').click();
        cy.get('.bankwire').click();
        cy.get('#cart_navigation > .button > span').click();
        cy.get('.cheque-indent > .dark').invoke('text').should('equal', 'Your order on My Store is complete.')
    });

});