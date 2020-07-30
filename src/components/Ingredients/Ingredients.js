import React from 'react';
import './Ingredients.css';
import Ingredient from "../Ingredient/Ingredient";
import TotalPrice from "../TotalPrice/TotalPrice";

const Ingredients = props => {
    return (
        <div className='ingredients'>
            <h4>Ингредиенты</h4>
            {props.ingredients.map(item => <Ingredient
                key={item.id}
                name={item.name}
                count={item.count}
                onBtnClick={() => props.addIngredients(item.id)}
                onRemoveBtnClick={() => props.removeIngredients(item.id)}
                icon={item.icon}
            />)}
            <TotalPrice price={props.price}/>
        </div>
    );
};

export default Ingredients;