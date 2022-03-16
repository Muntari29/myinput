import { IResultList, IResultListState } from '../utils/interfaces/common.js';

export default class ResultList {
  $target: Element;
  $element: HTMLDivElement;
  state: IResultListState;
  onKeyDownArrowUp: (nextId: number) => void;
  onKeyDownArrowDown: (nextId: number) => void;

  constructor({
    $target,
    initialState,
    onKeyDownArrowUp,
    onKeyDownArrowDown,
  }: IResultList) {
    this.$target = $target;
    this.$element = document.createElement('div');
    this.$element.className = 'result--list';
    this.state = initialState;
    this.onKeyDownArrowUp = onKeyDownArrowUp;
    this.onKeyDownArrowDown = onKeyDownArrowDown;
    this.render();
  }

  setState = (nextState: IResultListState) => {
    this.state = nextState;
    this.render();
  };

  template() {
    const { movieList, selectedId } = this.state;
    return `<ul class="list--ul" >
    ${movieList
      .map(
        (item, index) =>
          `<li id="${item.id}" class="list--li ${
            selectedId === index + 1 ? 'active' : ''
          }"  >${item.text}</li>`
      )
      .join('')}
  </ul>`;
  }

  render() {
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
    const { selectedId } = this.state;
    if (!e.isComposing) {
      if (e.key === 'ArrowUp') {
        const nextId = selectedId - 1;
        this.onKeyDownArrowUp(nextId);
      } else if (e.key === 'ArrowDown') {
        const nextId = selectedId + 1;
        this.onKeyDownArrowDown(nextId);
      }
    }
  };

  mounte() {
    const { movieList, isInputFocus } = this.state;
    window.removeEventListener('keydown', this.handleKeydown);
    if (movieList.length > 0 && isInputFocus) {
      window.addEventListener('keydown', this.handleKeydown);
    }
  }
}
