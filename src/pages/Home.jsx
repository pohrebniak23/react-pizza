import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock} from '../components'
import PizzaLoad from '../components/PizzaLoad';

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from '../redux/actions/pizzas'; 
 
const categoryNames = ["Мясные", "Вегетерианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
    {name: "популярности", type: "popular"},
    {name: "цене", type: "price"}, 
    {name: "алфавиту", type: "alphabet"}
]

export default function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);  
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);  
    const {category, sortBy} = useSelector(({filters}) => filters);  
    
    useEffect(() => {
        dispatch(fetchPizzas())
      }, [category, sortBy]);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    const onChangeSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    });
 
    return (
        <div className="container">
            <div className="content__top">

            <Categories 
                activeCategory={category}
                onClickItem={(index) => onSelectCategory(index)} 
                items={categoryNames} 
            />
            <SortPopup activeSortType={sortBy} items={sortItems} onChangeSortType={onChangeSortType}/>

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                isLoaded 
                ? items.map((obj) => ( <PizzaBlock key={obj.id} {...obj} /> )) 
                : new Array(12).fill(null).map((_, index) => (<PizzaLoad key={index}/>))
                }
            </div>
      </div>
    )
 }
 