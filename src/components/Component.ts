export default abstract class Component {
  abstract element: Element;

  public render(parent: Element | Component): void {
    if (parent instanceof Component) {
      parent.element.appendChild(this.element);
    } else {
      console.log('durl');
      parent.appendChild(this.element);
    }
  }
}
