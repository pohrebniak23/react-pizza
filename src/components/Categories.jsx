import React from 'react'

export default function Categories({items, onClickItem, activeCategory}) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickItem(null)}>
                    Все
                </li>
                {
                    items &&
                        items.map ((name, index) => (
                            <li className={activeCategory === index ? 'active' : ''} 
                                onClick={() => onClickItem(index)} 
                                key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))
                }
                
            </ul>
        </div>
    )
}
