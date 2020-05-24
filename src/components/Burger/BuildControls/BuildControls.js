import React from 'react';
import style from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}


];
const buildControls = (props) => (
    <div className={style.BuildControls}>
        <p>Burger price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(ctrl => (
          <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              added={() => props.ingredientsAdded(ctrl.type)}
              subtracted={() => props.ingredientsSubtracted(ctrl.type)}
              disabled={props.disable[ctrl.type]}
          />
        ))}
        <button className={style.OrderButton} disabled={!props.purchaseable}>SUBMIT</button>
    </div>
);

export default buildControls;
