import React, {Component,Fragment} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 1.2
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        purchaseable: false
    };
    addIngredientHandler = (type) =>{
        const  oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice,ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients)
    };
    subtractIngredientHandler = (type) => {
        const  oldCount = this.state.ingredients[type];
        if(oldCount>0){
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({totalPrice: newPrice,ingredients: updatedIngredients});
            this.updatePurchaseState(updatedIngredients);
        }
    };

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })//el is value from top
            .reduce((sum,el) =>{
                return sum + el;
            },0);
        this.setState({purchaseable: sum > 0});
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler}
                    ingredientsSubtracted={this.subtractIngredientHandler}
                    disable={disableInfo}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}

                />
            </Fragment>
        );
    }
}

export default BurgerBuilder;
