describe('How Cypress works', () => {
  it('Runs the click command only at the end', () => {
    cy.visit('https://www.google.com');
    cy.get('[name=q]').type('Cypress');
    alert('Hey! you must click OK in order to continue.');
  });
});
