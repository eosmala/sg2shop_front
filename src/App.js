import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Kissat from './Kissat';
import Koirat from './Koirat';
import Nav from './Nav';
import Tarjoukset from './Tarjoukset';
import Pieneläimet from './Pieneläimet';
import ProductInfo from './ProductInfo';
import Admin from './admin/Admin';
import Aproducts from './admin/Aproducts';
import SearchResults from './SearchResults';
import Order from './Order';

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
      <Nav url={URL}
      cart={cart} 
      setCategory={setCategory}
      addToCart={addToCart}
      emptyCart={emptyCart}
      removeFromCart={removeFromCart}
      changeAmount={changeAmount}
      />
      <div className="container">
        <Switch>
          <Route path="/" render={()=>
          <Home
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/Kissat" render={()=>
          <Kissat
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/Pieneläimet" render={()=>
          <Pieneläimet
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/Koirat" render={()=>
          <Koirat
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/Tarjoukset" render={()=>
          <Tarjoukset
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/SearchResults" render={()=>
          <SearchResults
           category={category}
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/product/:id" render={()=>
          <ProductInfo
           addToCart={addToCart}
           url={URL} />}
           exact
          />
          <Route path="/Order" render={()=>
          <Order
           addToCart={addToCart}
           emptyCart={emptyCart}
           removeFromCart={removeFromCart}
           changeAmount={changeAmount}
           url={URL}
           cart={cart} />}
           exact
          />
          <Route path="/admin" render={()=>
          <Admin
          url={URL} />}
          exact
          />
          <Route path="/admin/aproducts" render={()=>
          <Aproducts
          url={URL} />}
          exact
          />

        </Switch>
      </div>
      <Footer />
    </>
  );

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) +1, product);
    } else {
      product["amount"] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function emptyCart() {
    const emptyCart = [];
    setCart(emptyCart);
    localStorage.setItem('cart',JSON.stringify(emptyCart));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  function changeAmount(e, product, index) {
    updateAmount(e.target.value, product);
  }
}

export default App;
