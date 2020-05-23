import React from 'react';
import style from './Burger.module.css';
import BurgerIngredient from "./Ingredients/BurgerIngredient";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey =>
        [...Array(props.ingredients[igKey])].map((_, i) =>
           <BurgerIngredient key={igKey + i} type={igKey}/> // [,]
        )
    ).reduce((arr,el) => {
        return arr.concat(el);
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
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
