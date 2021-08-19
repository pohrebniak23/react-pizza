import './scss/app.scss';
import {Header} from './components';
import axios from 'axios';
import { connect } from "react-redux";
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { setPizzas } from './redux/actions/pizzas'; 

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas); // Вызывает файл /redux/actions/pizzas.js
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home pizzaItem={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) =>  dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);