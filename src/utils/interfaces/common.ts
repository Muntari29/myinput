export interface IItem {
  text: string;
  id: number;
}

export interface IState {
  inputValue: string;
  movieList: IItem[];
  isInputFocus: boolean;
}

export interface ITextInput {
  inputValue: string;
  onChange: (text: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export interface IResultList {
  movieList: IItem[];
  isInputFocus: boolean;
}
