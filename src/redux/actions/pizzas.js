import axios from 'axios';

export const setLoaded = val => ({
  type: 'SET_LOADED',
  payload: val
})

export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
      dispatch(setPizzas(data)); // Вызывает файл /redux/actions/pizzas.js
    });
};

// данные которые не меняются в клиентской части, получаются в action

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});