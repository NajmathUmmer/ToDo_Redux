import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Login';
import './index.scss';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types';

const defaultState: IStoreState = {
  authenticated: false,
  todo: [],
  users: []
};
const store = createStore(rootReducer, defaultState);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/:type(all|completed|pending|'')" component={App} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
