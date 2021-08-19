import './scss/app.scss';
import {Header} from './components';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React, {useEffect} from 'react';
import { setPizzas } from './redux/actions/pizzas'; 

function App() {

  const dispatch = useDispatch(); // определяем dispatch

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      dispatch(setPizzas(data.pizzas)) // Вызывает файл /redux/actions/pizzas.js
    })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );

}

export default App;