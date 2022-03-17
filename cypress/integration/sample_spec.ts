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
  context('api test', () => {
    it('value="가" API Test Success', () => {
      const text = '가';
      cy.get('#input').type(text);
      cy.getApiCase1(text);
      cy.get('.result--list').should('exist');
      cy.get('.list--li').should('have.length', 4);
    });
    it('value="나" API Test Success', () => {
      const text = '나';
      cy.get('#input').type(text);
      cy.getApiCase2(text);
      cy.wait(500);
      cy.get('.result--list').should('have.css', 'display', 'block');
      cy.get('.list--li').should('have.length', 3);
    });
    // 별!
    it('Not Exist Value API Test Success', () => {
      const text = 'blablabla';
      cy.get('#input').type(text);
      cy.notExistValueApiCase1(text);
      cy.get('.result--list').should('have.css', 'display', 'none');
      cy.get('.list--li').should('not.exist');
    });
    it('API Test Fail', () => {
      cy.intercept(
        'GET',
        'https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomple',
        (res) => alert(res)
      );
    });
  });
});
