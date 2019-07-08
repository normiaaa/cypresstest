describe('Check Social Buttons', function() {
    before(() => {
        cy.visit('http://automationpractice.com/index.php');

    });

    it('should check the facebook social button', () => {
        cy.get('.facebook > a').should('have.attr', 'href').and('include', 'https://www.facebook.com/groups/525066904174158/');
    });

    it('should check the twitter social button', () => {
        cy.get('.twitter > a').should('have.attr', 'href').and('equal', 'https://twitter.com/seleniumfrmwrk');
    });

    it('should check the youtube social button', () => {
        cy.get('.youtube > a').should('have.attr', 'href').and('equal', 'https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA');
    });

    it('should check the google-plus social button', () => {
        cy.get('.google-plus > a').should('have.attr', 'href').and('equal', 'https://plus.google.com/111979135243110831526/posts');
    });

});