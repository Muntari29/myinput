class Header {
  $target: Element;
  $element: HTMLElement;
  constructor({ $target }: any) {
    this.$target = $target;
    this.$element = document.createElement('header');
    this.render();
  }

  template() {
    return `<h1 class="header">autocomplete Input</h1>`;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.$target.appendChild(this.$element);
  }
}

export default Header;
