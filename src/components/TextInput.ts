import { ITextInput } from '../utils/interfaces/common.js';

export default class TextInput {
  $target: Element;
  $element: Element;
  state: string = '';
  onChange: (inputValue: string) => void;
  onFocus: () => void;
  onBlur: () => void;

  constructor({
    $target,
    initialState,
    onChange,
    onFocus,
    onBlur,
  }: ITextInput) {
    console.log('textInput');
    this.$target = $target;
    this.$element = document.createElement('div');
    this.$element.className = 'input--form';
    this.state = initialState;
    this.onChange = onChange;
    this.onFocus = onFocus;
    this.onBlur = onBlur;
    this.render();
  }

  setState = (nextState: any) => {
    this.state = nextState;
    this.render();
  };

  onInputHandler = async (e: Event) => {
    const inputValue = (e.target as HTMLInputElement).value;
    this.onChange(inputValue);
  };

  onClickXbtn = () => {
    (this.$element.querySelector('[name=movie]') as HTMLInputElement).value =
      '';
  };

  onFocusHandler = () => {
    this.onFocus();
  };

  onBlurHandler = () => {
    this.onBlur();
  };

  template() {
    return `<form class="form">
    <label class="form--label" for="input">
    <svg xmlns="http://www.w3.org/2000/svg" class="form--img" width="24" height="24" fill="none" viewBox="0 0 24 24" class="css-1emtzzi"><path fill="currentColor" fill-rule="evenodd" d="M16.173 16.43a7.5 7.5 0 11.257-.257.749.749 0 00-.257.257zm.639 1.442a9 9 0 111.06-1.06l3.88 3.88a.75.75 0 11-1.06 1.06l-3.88-3.88z" clip-rule="evenodd"></path></svg>
      <input id="input" class="form--input" type="text" name="movie" placeholder="제목, 감독, 배우로 검색" autocomplete='off' />
      <svg xmlns="http://www.w3.org/2000/svg" class="form--btn" width="24" height="24" fill="none" viewBox="0 0 24 24" class="css-1orrb02-IcClear"><path fill="currentColor" fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zm-8.12-3.96a.764.764 0 011.08 1.08L13.08 12l2.88 2.88a.764.764 0 01-1.08 1.08L12 13.08l-2.88 2.88a.764.764 0 01-1.08-1.08L10.92 12 8.04 9.12a.764.764 0 011.08-1.08L12 10.92l2.88-2.88z" clip-rule="evenodd"></path></svg>
    </label>
  </form>`;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.$target.appendChild(this.$element);
    this.mount();
  }

  mount() {
    this.$element.querySelector('.form')?.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this.$element
      .querySelector('[name=movie]')
      ?.addEventListener('input', this.onInputHandler);

    this.$element
      .querySelector('[name=movie]')
      ?.addEventListener('focus', this.onFocusHandler);

    this.$element
      .querySelector('[name=movie]')
      ?.addEventListener('blur', this.onBlurHandler);

    this.$element
      .querySelector('.form--btn')
      ?.addEventListener('click', this.onClickXbtn);
  }
}