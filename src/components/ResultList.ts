import { IItem, IResultList } from '../utils/interfaces/common.js';
import Component from './Component.js';

class ResultList extends Component {
  readonly element: Element;
  moviList: IItem[];
  isInputFocus: boolean;

  constructor({ movieList, isInputFocus }: IResultList) {
    console.log('ResList');
    super();
    this.isInputFocus = isInputFocus;
    this.moviList = movieList;
    this.element = document.createElement('div');
    this.element.className = 'result-list';
  }

  setIsInputFocusTrue = () => {
    this.isInputFocus = true;
    this.showList();
  };

  setIsInputFocusFalse = () => {
    this.isInputFocus = false;
    this.closedList();
  };

  showList() {
    this.element.innerHTML = `<ul class="list--ul" >
        ${this.moviList
          .map(
            (item) =>
              `<li id="${item.id}" class="list--li">${item.text}${item.id}</li>`
          )
          .join('')}
      </ul>`;
  }

  closedList() {
    this.element.innerHTML = '';
  }
}

export default ResultList;
