import {
  IAutoCompleteListState,
  IAutoCompleteList,
} from '../types/interfaces/common.js';

export default class AutoCompleteList {
  $target: Element;
  $element: HTMLElement;
  state: IAutoCompleteListState;
  onKeyDownArrowUp: (nextId: number) => void;
  onKeyDownArrowDown: (nextId: number) => void;
  onMouseEvent: (currentId: number) => void;

  constructor({
    $target,
    initialState,
    onKeyDownArrowUp,
    onKeyDownArrowDown,
    onMouseEvent,
  }: IAutoCompleteList) {
    this.$target = $target;
    this.$element = document.createElement('main');
    this.$element.className = 'result--list';
    this.state = initialState;
    this.onKeyDownArrowUp = onKeyDownArrowUp;
    this.onKeyDownArrowDown = onKeyDownArrowDown;
    this.onMouseEvent = onMouseEvent;
    this.render();
  }

  setState = (nextState: IAutoCompleteListState) => {
    this.state = nextState;
    this.render();
  };

  template() {
    const { movieList, selectedId } = this.state;
    return `<ul class="list--ul" >
    ${movieList
      .map(
        (item, index) =>
          `<li id="${index + 1}" class="list--li ${
            selectedId === index + 1 ? 'active' : ''
          }"  >${item.text}</li>`
      )
      .join('')}
  </ul>`;
  }

  onKeyboardHandler = (e: KeyboardEvent) => {
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

  onMouseMoveHandler = (e: MouseEvent) => {
    const li = e.target as HTMLLIElement;
    if (!li.className.includes('active')) {
      const currentId = parseInt(li.id, 10);
      this.onMouseEvent(currentId);
    }
  };

  onMouseLeaveHandler = () => {
    this.onMouseEvent(0);
  };

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

  mounte() {
    const { movieList, isInputFocus } = this.state;
    window.removeEventListener('keydown', this.onKeyboardHandler);
    if (movieList.length > 0 && isInputFocus) {
      window.addEventListener('keydown', this.onKeyboardHandler);
      this.$element.querySelectorAll('.list--li').forEach(($li) => {
        $li.addEventListener('mousemove', this.onMouseMoveHandler);
      });
      this.$element
        .querySelector('.list--ul')
        .addEventListener('mouseleave', this.onMouseLeaveHandler);
    }
  }
}
