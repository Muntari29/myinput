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
    selectedId: 0,
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
            inputValue: movieTitle,
            movieList: movieData,
          });
        } else {
          this.setState({
            ...this.state,
            inputValue: movieTitle,
            movieList: [],
          });
        }
      }, 500),
      onFocus: () => {
        this.setState({
          ...this.state,
          isInputFocus: true,
        });
      },
      onBlur: () => {
        this.setState({
          ...this.state,
          isInputFocus: false,
        });
      },
      onBtnClick: () => {
        this.setState({
          ...this.state,
          inputValue: '',
          movieList: [],
        });
      },
    });
    //
    this.resultList = new ResultList({
      $target,
      initialState: {
        movieList: this.state.movieList,
        isInputFocus: this.state.isInputFocus,
        selectedId: this.state.selectedId,
      },
      onKeyDownArrowUp: (nextId: number) => {
        console.log('onKeyDownArrowUp');
        this.setState({
          ...this.state,
          selectedId: nextId < 0 ? this.state.movieList.length : nextId,
        });
      },
      onKeyDownArrowDown: (nextId: number) => {
        console.log('onKeyDownArrowDown');
        this.setState({
          ...this.state,
          selectedId: nextId < this.state.movieList.length + 1 ? nextId : 0,
        });
      },
    });
  }

  setState(nextState: any) {
    this.state = nextState;
    console.log('set:', this.state);
    this.textInput.setState(this.state.inputValue);
    this.resultList.setState({
      movieList: this.state.movieList,
      isInputFocus: this.state.isInputFocus,
      selectedId: this.state.selectedId,
    });
  }
}
