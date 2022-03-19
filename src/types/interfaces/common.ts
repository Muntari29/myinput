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

export interface IUserInputForm extends ITarget {
  initialState: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  onBtnClick: () => void;
}

export interface IAutoCompleteListState {
  movieList: IMovieItem[];
  isInputFocus: boolean;
  selectedId: number;
}

export interface IAutoCompleteList extends ITarget {
  initialState: IAutoCompleteListState;
  onKeyDownArrowUp: (nextId: number) => void;
  onKeyDownArrowDown: (nextId: number) => void;
  onMouseEvent: (currentId: number) => void;
}
