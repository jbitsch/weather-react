import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import ApolloClient  from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import weatherReducer from './store/reducers/weather';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const storeState = window.__INITIAL_DATA__;
delete window.__INITIAL_DATA__;

const apploState = window.__APOLLO_STATE__;
delete window.__APOLLO_STATE__;


const store = createStore(weatherReducer,storeState, composeEnhancers(
  applyMiddleware(thunk)
));

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache().restore(apploState)
});

hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('main')
);