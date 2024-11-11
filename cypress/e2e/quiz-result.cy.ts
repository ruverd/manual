describe('quiz result page', () => {
  it('should fill up the quiz and display the result page with success message', () => {
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000/quiz');

    cy.get('button').click();

    cy.get('img[alt="Temples"]').click();
    cy.get('p').contains('false').click();
    cy.get('p').contains('false').click();

    cy.get('p').should('exist').should('contain', 'Great news!');
    cy.get('button').click();

    cy.get('button').should('exist').should('have.text', 'Take the Quiz');
  });

  it('should fill up the quiz and display the result page with rejection message', () => {
    cy.clearLocalStorage();
    cy.visit('http://localhost:3000/quiz');

    cy.get('button').click();

    cy.get('img[alt="Extensive"]').click();

    cy.get('p').should('exist').should('contain', 'Unfortunately');
    cy.get('button').click();

    cy.get('button').should('exist').should('have.text', 'Take the Quiz');
  });
});
