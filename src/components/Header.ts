import Component from './Component.js';
class Header extends Component {
  readonly element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('h1');
    this.element.className = 'header';
    this.element.textContent = 'autocomplete Input';
  }
}

export default Header;
