import React from 'react';
import ReactDOM from 'react-dom';
import './_css/index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './_reducer/rootReducer';
import * as serviceWorker from './serviceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store} >
    <Router>
     <Route path='/' component={App}/> 
    </Router> 
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
