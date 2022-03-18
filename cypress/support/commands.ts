/// <reference types="cypress" />
/// <reference types="../support" />
// @ts-check

Cypress.Commands.add('getApiCase1', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`,
    'fixture:data1'
  );
});

Cypress.Commands.add('getApiCase2', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`,
    'fixture:data2'
  );
});

Cypress.Commands.add('notExistValueApiCase1', (text: string) => {
  cy.intercept(
    'GET',
    `https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomplete?value=${text}`,
    []
  );
});
