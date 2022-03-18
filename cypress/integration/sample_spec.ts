/// <reference types="cypress" />

import { type } from 'os';

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
    // 텍스트 입력 + 클릭 버튼 보이기
    //   const text = '가';
    //   cy.get('#input').type(text);
    // });
    // 텍스트 입력 후 클릭으로 값 지우기
    // 텍스트 입력 후 리스트 컴포넌트 보이기
    // 텍스트 입력 후 리스트 컴포넌트 보이기 + 위아래 아이템 선택 가능
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
