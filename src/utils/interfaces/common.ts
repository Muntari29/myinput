export interface ITarget {
  $target: Element;
}

export interface IMovieItem {
  text: string;
  id: number;
}

export interface IAppState {
  inputValue: string;
  movieList: IMovieItem[];
  isInputFocus: boolean;
  selectedId: number;
}

export interface ITextInput extends ITarget {
  initialState: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onBtnClick: () => void;
}

export interface IResultListState {
  movieList: IMovieItem[];
  isInputFocus: boolean;
  selectedId: number;
}

export interface IResultList extends ITarget {
  initialState: IResultListState;
  onKeyDownArrowUp: (nextId: number) => void;
  onKeyDownArrowDown: (nextId: number) => void;
}
