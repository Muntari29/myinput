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
}

export interface ITextInput extends ITarget {
  initialState: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export interface IResultListState {
  movieList: IItem[];
  isInputFocus: boolean;
}

export interface IResultList extends ITarget {
  initialState: IResultListState;
}
