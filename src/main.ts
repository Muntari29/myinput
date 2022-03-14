import App from './components/App.js';

const $app = document.querySelector('#app');

const appElement = new App();

function renderMain() {
  if ($app !== null) {
    appElement.render($app);
  }
}

renderMain();
