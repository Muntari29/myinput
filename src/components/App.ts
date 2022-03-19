import { getAutoCompleteList } from '../api/index.js';
import Debounce from '../utils/Debounce.js';
import { IMovieItem, IAppState, ITarget } from '../types/interfaces/common.js';
import Storage from '../utils/Storage.js';
import Header from './Header.js';
import AutoCompleteList from './AutoCompleteList.js';
import UserInputForm from './UserInputForm.js';

export default class App {
  $target: Element;
  UserInputForm: UserInputForm;
  AutoCompleteList: AutoCompleteList;
  state: IAppState = {
    inputValue: '',
    movieList: [],
    isInputFocus: false,
    selectedId: 0,
  };

  cache = Storage.getItem('movie', {});

  constructor({ $target }: ITarget) {
    this.$target = $target;
    new Header({ $target });
    this.UserInputForm = new UserInputForm({
      $target,
      initialState: this.state.inputValue,
      onChange: Debounce(async (movieTitle: string) => {
        if (movieTitle.trim().length > 0) {
          let movieData: IMovieItem[] | null = null;
          if (this.cache[movieTitle]) {
            movieData = this.cache[movieTitle];
          } else {
            movieData = await getAutoCompleteList(movieTitle);
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
          selectedId: 0,
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
    this.AutoCompleteList = new AutoCompleteList({
      $target,
      initialState: {
        movieList: this.state.movieList,
        isInputFocus: this.state.isInputFocus,
        selectedId: this.state.selectedId,
      },
      onKeyDownArrowUp: (nextId: number) => {
        this.setState({
          ...this.state,
          selectedId: nextId < 0 ? this.state.movieList.length : nextId,
        });
      },
      onKeyDownArrowDown: (nextId: number) => {
        this.setState({
          ...this.state,
          selectedId: nextId < this.state.movieList.length + 1 ? nextId : 0,
        });
      },
    });
  }

  setState(nextState: IAppState) {
    this.state = nextState;
    this.UserInputForm.setState(this.state.inputValue);
    this.AutoCompleteList.setState({
      movieList: this.state.movieList,
      isInputFocus: this.state.isInputFocus,
      selectedId: this.state.selectedId,
    });
  }
}
