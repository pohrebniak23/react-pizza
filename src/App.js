import './scss/app.scss';
import {Header} from './components';
import axios from 'axios';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas);
    })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
