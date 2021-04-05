import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/app/app.jsx';
import {Provider} from 'react-redux';
import {Operation as HomesOperation} from './js/store/homes/homes';
import store from './js/store/store';

const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context(`./img/icons`, true, /\.svg$/));

const rootElement = document.querySelector(`#root`);

Promise.all([
  store.dispatch(HomesOperation.loadHomes()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      , rootElement
  );
});
