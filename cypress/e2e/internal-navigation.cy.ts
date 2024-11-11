describe('internal navigation', () => {
  it('should exist internal navigations', () => {
    cy.visit('http://localhost:3000');

    cy.get('a[href="/internal/about"]').should('exist');
  });

  it('should be able to click on the quiz button and redirect to the quiz page', () => {
    cy.visit('http://localhost:3000');

    cy.get('a[href="/internal/about"]').click();
    cy.url().should('include', '/internal/about');
  });
});
