import Component from './Component.js';
import Header from './Header.js';
import TextInput from './TextInput.js';

class App {
  // readonly element: HTMLElement;
  public Header: Header;
  public TextInput: TextInput;

  constructor() {
    // super();
    // this.element = document.createElement('a');
    this.Header = new Header();
    this.TextInput = new TextInput();
  }

  render(parent: Element) {
    // super.render(parent);
    this.Header.render(parent);
    this.TextInput.render(parent);
  }
}

export default App;
