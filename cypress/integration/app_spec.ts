/// <reference types="cypress" />
/// <reference types="../support" />
// @ts-check

describe('Main Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  context('User Test', () => {
    it('Init Client View', () => {
      cy.get('.header').should('be.visible');
      cy.get('#input').should('be.visible');
      cy.get('.form--btn').should('not.be.visible');
      cy.get('.result--list').should('not.exist');
    });
    it('User NotExist Value Input and KeyDown Test', () => {
      const text = 'blablabla';
      cy.get('#input').type(text);
      cy.notExistValueApiCase1(text);
      cy.get('.result--list').should('have.css', 'display', 'none');
      cy.get('.list--li').should('not.exist');
    });
    context('Click The X-Button Test', () => {
      it('User Click The X-Button After Anything Input ', () => {
        const text = 'anything';
        cy.get('#input').type(text).should('have.value', text);
        cy.get('.form--btn').should('be.visible').click();
        cy.get('#input').should('have.value', '');
      });
      it('User Click The X-Button After GET API Request Success ', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.getApiCase1(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
        cy.get('.form--btn').click();
        cy.get('#input').should('have.value', '');
        cy.get('.list--li').should('not.exist');
      });
    });
    context('Input Element Focus And Blur Test', () => {
      it('Input Focus && Blur Event After GET API Request Success', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase1(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
        cy.get('#input').blur();
        cy.get('.result--list').should('not.exist');
        cy.get('#input').focus();
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
      });
    });
    context('KeyDown Arrow Down Test', () => {
      it('User Value="가" Input and KeyDown Test', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase1(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
        cy.KeyDownEventCase1(1, false);
      });
      it('User Value="나" Input and KeyDown Test', () => {
        const text = '나';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase2(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 3);
        cy.KeyDownEventCase2(1, false);
      });
    });
    context('KeyDown Arrow Up Test', () => {
      it('User Value="가" Input and KeyDown Test', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase1(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
        cy.KeyDownEventCase1(4, true);
      });
      it('User Value="나" Input and KeyDown Test', () => {
        const text = '나';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase2(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 3);
        cy.KeyDownEventCase2(3, true);
      });
    });
    context('Mouse Event Test', () => {
      it('Item MouseMove && MouseLeave Test', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase1(text);
        cy.get('.result--list').trigger('mousemove');
        cy.get('.list--li.active').should(
          'have.css',
          'background-color',
          'rgb(193, 193, 193)'
        );
        cy.get('.result--list').trigger('mouseleave');
        cy.get('.list--li.active').should('not.exist');
      });
    });
  });
});
