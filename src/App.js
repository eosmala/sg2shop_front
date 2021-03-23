import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Products from './Products'
import Dogs from './Dogs'
import Cats from './Cats'
import SmallPets from './SmallPets';
import Sale from './Sale';

function App() {
  return (
    <>
      <Header />
      <Nav url="http://localhost/"/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path="/Dogs" component={Dogs} />
          <Route path="/Cats" component={Cats} />
          <Route path="/SmallPets" component={SmallPets} />
          <Route path="/Sale" component={Sale} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
