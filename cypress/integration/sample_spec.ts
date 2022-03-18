/// <reference types="cypress" />
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
    context('KeyDown Arrow Down Test', () => {
      it('User Value="가" Input and KeyDown Test', () => {
        const text = '가';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase1(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 4);
        cy.get('body').type('{downArrow}');
        cy.get('.list--li.active')
          .should('have.css', 'background-color', 'rgb(193, 193, 193)')
          .should('have.id', 1);
        cy.get('body')
          .type('{downArrow}')
          .type('{downArrow}')
          .type('{downArrow}')
          .type('{downArrow}');
        cy.get('.list--li.acive').should('not.exist');
      });
      it('User Value="나" Input and KeyDown Test', () => {
        const text = '나';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase2(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 3);
        cy.get('body').type('{downArrow}');
        cy.get('.list--li.active')
          .should('have.css', 'background-color', 'rgb(193, 193, 193)')
          .should('have.id', 5);
        cy.get('body')
          .type('{downArrow}')
          .type('{downArrow}')
          .type('{downArrow}');
        cy.get('.list--li.acive').should('not.exist');
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
        cy.get('body').type('{upArrow}');
        cy.get('.list--li.active')
          .should('have.css', 'background-color', 'rgb(193, 193, 193)')
          .should('have.id', 4);
        cy.get('body')
          .type('{upArrow}')
          .type('{upArrow}')
          .type('{upArrow}')
          .type('{upArrow}');
        cy.get('.list--li.acive').should('not.exist');
      });
      it('User Value="나" Input and KeyDown Test', () => {
        const text = '나';
        cy.get('#input').type(text);
        cy.get('.form--btn').should('be.visible');
        cy.getApiCase2(text);
        cy.get('.result--list').should('exist');
        cy.get('.list--li').should('have.length', 3);
        cy.get('body').type('{upArrow}');
        cy.get('.list--li.active')
          .should('have.css', 'background-color', 'rgb(193, 193, 193)')
          .should('have.id', 7);
        cy.get('body').type('{upArrow}').type('{upArrow}').type('{upArrow}');
        cy.get('.list--li.acive').should('not.exist');
      });
    });
  });
  // it('input value', () => {
  //   const text = '가';
  //   cy.get('#input').type(text).should('have.value', text);
  // });
  // it('clear input value', () => {
  //   cy.get('#input').type('가');
  //   cy.get('.css-1orrb02-IcClear').click();
  //   cy.get('#input').should('have.value', '');
  // });
  // context('api test', () => {
  //   it('value="가" API Test Success', () => {
  //     const text = '가';
  //     cy.get('#input').type(text);
  //     cy.getApiCase1(text);
  //     cy.get('.result--list').should('exist');
  //     cy.get('.list--li').should('have.length', 4);
  //   });
  //   it('value="나" API Test Success', () => {
  //     const text = '나';
  //     cy.get('#input').type(text);
  //     cy.getApiCase2(text);
  //     cy.wait(500);
  //     cy.get('.result--list').should('have.css', 'display', 'block');
  //     cy.get('.list--li').should('have.length', 3);
  //   });
  //   // 별!
  //   it('Not Exist Value API Test Success', () => {
  //     const text = 'blablabla';
  //     cy.get('#input').type(text);
  //     cy.notExistValueApiCase1(text);
  //     cy.get('.result--list').should('have.css', 'display', 'none');
  //     cy.get('.list--li').should('not.exist');
  //   });
  //   it('API Test Fail', () => {
  //     cy.intercept(
  //       'GET',
  //       'https://5qfov74y3c.execute-api.ap-northeast-2.amazonaws.com/web-front/autocomple',
  //       (res) => alert(res)
  //     );
  //   });
  // });
});
