import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import Login from './pages/Logins';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/login" component={Login} />

    </Router>
  );
}

export default App;
