describe('Homepage Tests', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });

    it('Title', () => {

        //Title Display

        cy.title().should('equal', 'My Store');

    });

    it('Search Bar', () => {

        //Search Display

        cy.get('#search_query_top').should('be.visible');

    });

    it('Logo', () => {

        //Logo Display

        cy.get('.logo').should('be.visible');

    });

    it('Slider', () => {

        //Slider Display

        cy.get('#homepage-slider').should('be.visible');

    });

});