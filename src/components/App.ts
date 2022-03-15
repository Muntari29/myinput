import Component from './Component.js';
import Header from './Header.js';
import TextInput from './TextInput.js';
import { IState } from '../utils/interfaces/common.js';
import ResultList from './ResultList.js';
import { getItem } from '../utils/Storage.js';

// element 새로 생성하지 않기에 extends 삭제하였음.
class App {
  // readonly element: HTMLElement;
  public Header: Header;
  public TextInput: TextInput;
  public ResultList: ResultList;
  // public Result: Result;
  state: IState = {
    inputValue: '',
    movieList: [],
    isInputFocus: false,
  };
  cache = getItem('movie', {});

  constructor() {
    // super();
    // this.element = document.createElement('a');
    console.log('App');
    this.Header = new Header();
    this.TextInput = new TextInput({
      inputValue: this.state.inputValue,
      onChange: (text: string) => {
        console.log(555555, text);
      },
      onFocus: () => {
        this.state.isInputFocus = true;
        this.ResultList.setIsInputFocusTrue();
      },
      onBlur: () => {
        this.state.isInputFocus = false;
        this.ResultList.setIsInputFocusFalse();
      },
    });
    this.ResultList = new ResultList({
      movieList: [
        { id: 1, text: 'name' },
        { id: 2, text: 'name2' },
      ],
      isInputFocus: this.state.isInputFocus,
    });
  }

  render(parent: Element) {
    // super.render(parent);
    this.Header.render(parent);
    this.TextInput.render(parent);
    this.ResultList.render(parent);
  }
}

export default App;
