import { IResultList, IResultListState } from '../utils/interfaces/common.js';

export default class ResultList {
  $target: Element;
  $element: HTMLDivElement;
  state: IResultListState;

  constructor({ $target, initialState }: IResultList) {
    console.log('ResList');
    this.$target = $target;
    this.$element = document.createElement('div');
    this.$element.className = 'result-list';
    this.state = initialState;
    this.render();
  }

  setState = (nextState: IResultListState) => {
    this.state = nextState;
    console.log('here', this.state);
    this.render();
  };

  template() {
    const { movieList } = this.state;
    return `<ul class="list--ul" >
    ${movieList
      .map((item) => `<li id="${item.id}" class="list--li">${item.text}</li>`)
      .join('')}
  </ul>`;
  }

  render() {
    console.log('render');
    const { movieList, isInputFocus } = this.state;
    this.$element.style.display = movieList.length > 0 ? 'block' : 'none';
    if (isInputFocus) {
      this.$element.innerHTML = this.template();
      this.$target.appendChild(this.$element);
    } else {
      this.$element.remove();
    }
    this.mounte();
  }

  handleKeydown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === 'ArrowUp') {
      console.log('arrowup');
    } else if (e.key === 'ArrowDown') {
      console.log('ArrowDown');
    }
  };

  mounte() {
    const { movieList, isInputFocus } = this.state;
    console.log('mount');
    window.removeEventListener('keydown', this.handleKeydown);
    if (movieList.length > 0 && isInputFocus) {
      window.addEventListener('keydown', this.handleKeydown);
    }
  }
}
