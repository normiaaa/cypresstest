describe('Add to cart a product', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });

    it('Should add a procut to the cart', () => {
        cy.get('#homefeatured > :nth-child(2)').trigger('mouseover');
        cy.get('[data-id-product="2"]').first().click();
        cy.get('#layer_cart').should('be.visible');
        cy.get('.layer_cart_product > h2')
            .should('be.visible')
            .invoke('text')
            .should('contain', 'Product successfully added to your shopping cart');
    });

});