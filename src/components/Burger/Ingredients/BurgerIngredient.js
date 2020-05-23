import React from 'react';
import PropTypes from 'prop-types';
import style from './BurgerIngredients.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={style.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className={style.BreadTop}>
                    <div className={style.Seeds1}></div>
                    <div className={style.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
            ingredient = <div className={style.Meat}></div>;
            break;
        case('Cheese'):
            ingredient = <div className={style.Cheese}></div>;
            break;
        case('Salad'):
            ingredient = <div className={style.Salad}></div>;
            break;
        case('Bacon'):
            ingredient = <div className={style.Bacon}></div>;
            break;
        default:
            ingredient = null;


    }
    return ingredient;

};

burgerIngredient.PropTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;
