import './scss/app.scss';
import {Header} from './components';
import { useDispatch } from 'react-redux';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {

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