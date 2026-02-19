import ReactDOM from 'react-dom/client';

import App from './app/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(
  <Provider store={store}>
    <App />
  </Provider>
);
