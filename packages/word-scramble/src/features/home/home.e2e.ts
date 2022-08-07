/// <reference types="cypress" />

describe('Home', (): void => {
  it('should display "Hello world"', (): void => {
    cy.visit('/');
    cy.contains('p', 'Hello world');
  });
});
