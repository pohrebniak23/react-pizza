import './scss/app.scss';
import {Header} from './components';
import axios from 'axios';
import { connect } from "react-redux";
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { setPizzas } from './redux/actions/pizzas';

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, []) 

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home pizzaItem={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}


export default App;
