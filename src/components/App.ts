import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
  readonly element: HTMLElement;
  public Header: Header;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.Header = new Header();
  }

  render(parent: Element) {
    this.Header.render(parent);
    super.render(parent);
  }
}

export default App;
