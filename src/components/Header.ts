class Header {
  $target: Element;
  constructor({ $target }: any) {
    this.$target = $target;
    this.render();
  }

  template() {
    return `<header class="header">autocomplete Input</header>`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}

export default Header;
