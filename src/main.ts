import App from './components/App.js';

const $app = document.querySelector('#app');

function renderMain() {
  if ($app !== null) {
    new App({ $target: $app });
  }
}

renderMain();
