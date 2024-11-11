describe('go to quiz page', () => {
  it('should display the landing page', () => {
    cy.visit('http://localhost:3000');

    cy.get('a[href="/quiz"]').should('exist');
  });

  it('should be able to click on the quiz button and redirect to the quiz page', () => {
    cy.visit('http://localhost:3000');

    cy.get('a[href="/quiz"]').click();
    cy.url().should('include', '/quiz');
  });
});
