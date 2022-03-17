/// <reference types="cypress" />
// @ts-check

describe('Main Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('input value', () => {
    const text = '가';
    cy.get('#input').type(text).should('have.value', text);
  });
  it('clear input value', () => {
    cy.get('#input').type('가');
    cy.get('.css-1orrb02-IcClear').click();
    cy.get('#input').should('have.value', '');
  });
  it('test', () => {
    const text = '가';
    cy.get('#input').type(text).focus();
  });
});
