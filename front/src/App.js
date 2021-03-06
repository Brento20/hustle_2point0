import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import About from './pages/About';
import Social from  './pages/Social'
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Footer from './components/Footer'

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3001/graphql',
// });

const httpLink = createHttpLink({
  uri:
    window.location.hostname.indexOf("localhost") > -1
      ? "http://localhost:3001/graphql"
      : "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <br />
            <br />
            <div>
            <br /> 
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route
                path="/social"
                element={<Social />}
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
            <br />
            </div>
          </StoreProvider>
        </div>
      </Router>
    <Footer />
    </ApolloProvider>
  );
}

export default App;
