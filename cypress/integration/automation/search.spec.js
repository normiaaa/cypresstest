describe('Search Tests', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });

    it('Valid Search', function() {

        //Valid Search

        cy.get('#search_query_top').should('be.visible').type('dress');
        cy.get('.button-search').click();
        cy.get('.product-name').contains('dress');


    });

    it('Invalid Search', function() {

        //Invalid Search

        cy.get('#search_query_top').should('be.visible').clear().type('asdf');
        cy.get('.button-search').click();
        cy.get('.alert').invoke('text').should('contain', 'No results were found for your search "asdf"');
    });

});