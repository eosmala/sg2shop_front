import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';

function App() {
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const URL = "http://localhost/sg2shop_back/"

  let location = useLocation();
  
 useEffect(() => {
    if(location.state !==undefined) {
      setCategory({id: location.state.id,name: location.state.name});
      console.log("category " + category)
    }
 }, [location.state])
  
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  return (
    <>
      <Header />
      <Nav url={URL} cart={cart} setCategory={setCategory}/>
      <div className="container">
        <Switch>
          <Route path="/" render={()=>
          <Home
           category={category}
           addtoCart={addtoCart}
           url={URL} />}
           exact
          />

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
