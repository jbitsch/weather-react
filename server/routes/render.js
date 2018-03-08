import React from 'react'
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ApolloClient  from 'apollo-client';
//import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getDataFromTree, ApolloProvider } from 'react-apollo';
import { SchemaLink } from 'apollo-link-schema';
import serialize from 'serialize-javascript';
//import fetch from 'node-fetch';
import App from '../../client/App'
import routes from '../../client/routes';
import weatherReducer from '../../client/store/reducers/weather';

const express = require('express');
const router = express.Router();
const City = require('../models/city');
const schema = require('../../server/schema/schema');

router.get('/', function(req, res) {

  const cityParam = req.query.city;

  //{ "activeRoute": { "path": "/", "exact": true } } if route found or {} if not found
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((_)=> {

    //const link = createHttpLink({uri: '/graphql', fetch: fetch});
    const link = new SchemaLink({ schema }); //Use schema link instead since it is on the same server
    const client = new ApolloClient({
      ssrMode: true,
      link: link,
      cache: new InMemoryCache()
    });
    const initialState = client.extract();

    let city = "Copenhagen";

    if (cityParam) {
      city = cityParam;
    }

    const store = createStore(weatherReducer, {
      loading : false,
      weather : undefined,
      city : city
    });
    const storeState = store.getState();

    const markup = getMarkup(req,store,client,false);
    getDataFromTree(markup).then(() => {
      const content = renderToString(markup);
      return res.status(200).render('index', { markup : content, data : serialize(storeState),  apolloState : serialize(initialState) });
    }).catch(err => {
      const content = renderToString(getMarkup(req,store,client,true));
      return res.status(200).render('index', { markup : content, data : serialize(storeState),  apolloState : serialize(initialState) });
    });


    // Load weather from the API endpoint
    /*City.get(city)
      .then(data => {
        const store = createStore(weatherReducer, {
          loading : false,
          weather : data
        });
        const storeState = store.getState();

      }).catch(err => {
      const store = createStore(weatherReducer, { loading : false, weather : undefined });

      const storeState = store.getState();

      const markup = renderTemplate(req,store,client);
      return res.status(200).render('index', { markup, data : serialize(storeState), apolloState : apolloState });
    });
  });*/

  });
});

function getMarkup(req,store,client,error) {
  const context = { };

  const markup = (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StaticRouter location={ req.url } context={ context }>
          <App serverError={error}/>
        </StaticRouter>
      </Provider>
    </ApolloProvider> );

  return markup;
}

module.exports = router;