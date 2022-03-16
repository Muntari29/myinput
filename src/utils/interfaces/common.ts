export interface ITarget {
  $target: Element;
}

export interface IItem {
  text: string;
  id: number;
}

export interface IState {
  inputValue: string;
  movieList: IItem[];
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
  movieList: IItem[];
  isInputFocus: boolean;
  selectedId: number;
}

export interface IResultList extends ITarget {
  initialState: IResultListState;
  onKeyDownArrowUp: (nextId: number) => void;
  onKeyDownArrowDown: (nextId: number) => void;
}
