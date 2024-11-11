describe('quiz intro page', () => {
  it('should exist intro page with a button', () => {
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000/quiz');

    cy.url().should('include', '/quiz');

    cy.get('button').should('exist').should('have.text', 'Take the Quiz');
  });

  it('should be able to click on the button and redirect to the quiz page', () => {
    cy.visit('http://localhost:3000/quiz');

    cy.get('button').click();

    cy.url().should('include', '/quiz');
    cy.get('h2').should('exist');
  });
});
