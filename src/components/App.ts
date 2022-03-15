import { request } from '../api/index.js';
import Debounce from '../utils/Debounce.js';
import { IState, ITarget } from '../utils/interfaces/common.js';
import Storage from '../utils/Storage.js';
import Header from './Header.js';
import ResultList from './ResultList.js';
import TextInput from './TextInput.js';

export default class App {
  $target: Element;
  textInput: TextInput;
  resultList: ResultList;
  state: IState = {
    inputValue: '',
    movieList: [],
    isInputFocus: false,
  };

  cache = Storage.getItem('movie', {});

  constructor({ $target }: ITarget) {
    this.$target = $target;
    new Header({ $target });
    //
    this.textInput = new TextInput({
      $target,
      initialState: this.state.inputValue,
      onChange: Debounce(async (movieTitle: string) => {
        if (movieTitle.length > 0) {
          let movieData: string | null = null;
          if (this.cache[movieTitle]) {
            movieData = this.cache[movieTitle];
          } else {
            movieData = await request(movieTitle);
            this.cache[movieTitle] = movieData;
            Storage.setItem('movie', this.cache);
          }
          this.setState({
            ...this.state,
            movieList: movieData,
          });
        }
      }, 500),
      onFocus: () => {
        console.log('focus');
        this.setState({
          ...this.state,
          isInputFocus: true,
        });
      },
      onBlur: () => {
        console.log('blur');
        this.setState({
          ...this.state,
          isInputFocus: false,
        });
      },
    });
    //
    this.resultList = new ResultList({
      $target,
      initialState: {
        movieList: this.state.movieList,
        isInputFocus: this.state.isInputFocus,
      },
    });
  }

  setState(nextState: any) {
    console.log('app setState', nextState);
    this.state = nextState;
    this.resultList.setState({
      movieList: this.state.movieList,
      isInputFocus: this.state.isInputFocus,
    });
    // this.render();
  }

  template() {
    return `
        <div></div>
    `;
  }

  render() {
    // this.$target.innerHTML = this.template();
    this.setState('테스트');
  }
}
