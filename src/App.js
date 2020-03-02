import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import initRenderRoutes from './routes';
import Navbar from './components/Navbar/Navbar';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Switch>{initRenderRoutes()}</Switch>
    </Router>
  </ApolloProvider>
);

export default App;
