import Component from './Component.js';
import Header from './Header.js';
import TextInput from './TextInput.js';
import { IState } from '../utils/interfaces/common.js';
import ResultList from './ResultList.js';
import Storage from '../utils/Storage.js';
import { request } from '../api/index.js';
import Debounce from '../utils/Debounce.js';

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
  cache = Storage.getItem('movie', {});

  constructor() {
    // super();
    // this.element = document.createElement('a');
    console.log('App');
    this.Header = new Header();
    this.TextInput = new TextInput({
      inputValue: this.state.inputValue,
      onChange: Debounce(async (text: string) => {
        const res = await request(text);
        if (res.length !== 0) {
          this.cache[text] = res;
          Storage.setItem('movie', this.cache);
        }
      }, 800),
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
      movieList: this.state.movieList,
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
