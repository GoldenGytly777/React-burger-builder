import React from 'react';
import style from './Burger.module.css';
import BurgerIngredient from "./Ingredients/BurgerIngredient";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey =>
        [...Array(props.ingredients[igKey])].map((_, i) =>
           <BurgerIngredient key={igKey + i} type={igKey}/> // [,]
        )
    );
    console.log(transformedIngredients);
    return(
        <div className={style.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
