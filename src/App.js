import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Products from './Products'

function App() {
  return (
    <>
      <Header />
      <Nav url="http://localhost/"/> {/* TÄMÄ VOI OLLA ERI. VAIHDA OIKEAAN */}
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
