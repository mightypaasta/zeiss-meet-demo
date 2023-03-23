import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/base/App';
import { Provider } from 'react-redux/es/exports';
import configureStore from './core/store/configureStore'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App/>
    </Provider>
  </React.StrictMode>
);

