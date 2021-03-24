import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
  return (
    <>
      <Header />
      <Nav url="http://localhost/"/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
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
}

export default App;
