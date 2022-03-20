/// <reference types="cypress" />
/// <reference types="../support" />
// @ts-check

/**
 * Case1 === Value = "가"
 * Case2 === Value = "나"
 */

Cypress.Commands.add('getApiCase1', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`
  ).as('Get_Value="가"');
});

Cypress.Commands.add('getApiCase2', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`
  ).as('Get_Value="나"');
});

Cypress.Commands.add('notExistValueApiCase1', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`,
    []
  );
});

Cypress.Commands.add(
  'KeyDownEventCase1',
  (selectedId: number, ArrowUp: boolean) => {
    const Arrow = ArrowUp ? '{upArrow}' : '{downArrow}';
    cy.get('body').type(Arrow);
    cy.get('.list--li.active')
      .should('have.css', 'background-color', 'rgb(193, 193, 193)')
      .should('have.id', selectedId);
    cy.get('body').type(Arrow).type(Arrow).type(Arrow).type(Arrow);
    cy.get('.list--li.acive').should('not.exist');
  }
);

Cypress.Commands.add(
  'KeyDownEventCase2',
  (selectedId: number, ArrowUp: boolean) => {
    const Arrow = ArrowUp ? '{upArrow}' : '{downArrow}';
    cy.get('body').type(Arrow);
    cy.get('.list--li.active')
      .should('have.css', 'background-color', 'rgb(193, 193, 193)')
      .should('have.id', selectedId);
    cy.get('body').type(Arrow).type(Arrow).type(Arrow);
    cy.get('.list--li.acive').should('not.exist');
  }
);
