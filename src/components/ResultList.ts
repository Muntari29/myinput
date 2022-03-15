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
    console.log('here', this.state, nextState);
    this.render();
  };

  template() {
    return `<ul class="list--ul" >
    ${this.state.movieList
      .map(
        (item) =>
          `<li id="${item.id}" class="list--li">${item.text}${item.id}</li>`
      )
      .join('')}
  </ul>`;
  }

  render() {
    if (this.state.isInputFocus) {
      this.$element.innerHTML = this.template();
    }
    this.$element.style.display = this.state.isInputFocus ? 'block' : 'none';
    this.$target.appendChild(this.$element);
  }
}
