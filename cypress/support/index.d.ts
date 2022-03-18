/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getApiCase1(text: string): Chainable<Element>;
    getApiCase2(text: string): Chainable<Element>;
    notExistValueApiCase1(text: string): Chainable<Element>;
    KeyDownEventCase1(selectedId: number, ArrowUp: boolean): Chainable<Element>;
    KeyDownEventCase2(selectedId: number, ArrowUp: boolean): Chainable<Element>;
  }
}
