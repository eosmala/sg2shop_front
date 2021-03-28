import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import Tuotteet from './Tuotteet';
import Koirat from './Koirat';
import Kissat from './Kissat';
import Pieneläimet from './Pieneläimet';
import Tarjoukset from './Tarjoukset';

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  return (
    <>
      <Header />
      <Nav url="http://localhost/" cart={cart} setCategory={setCategory}/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home}
           category={category}
           addtoCart={addtoCart}
           exact
          />
          <Route path="/Tuotteet" component={Tuotteet} />
          <Route path="/Koirat" component={Koirat} />
          <Route path="/Kissat" component={Kissat} />
          <Route path="/Pieneläimet" component={Pieneläimet} />
          <Route path="/Tarjoukset" component={Tarjoukset} />
        </Switch>
      </div>
      <Footer />
    </>
  );

  function addtoCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }
}

export default App;
