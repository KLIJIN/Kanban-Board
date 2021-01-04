import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store.js'


const renderApp = (Component) => (
        ReactDOM.render(
          <Provider store={store}>
            <Component />
          </Provider>,
          document.getElementById('root')
        )  
)

  renderApp(App)

reportWebVitals();
