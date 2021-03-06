import { ITarget } from '../types/interfaces/common';

class Header {
  $target: Element;
  $element: HTMLElement;
  constructor({ $target }: ITarget) {
    this.$target = $target;
    this.$element = document.createElement('header');
    this.render();
  }

  template() {
    return `<h1 class="header">AutoComplete Input</h1>`;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.$target.appendChild(this.$element);
  }
}

export default Header;
