import React from 'react';
import './Ingredient.css';

const Ingredient = props => {
    return (
        <div className="ingredient">
            <button type="button" className="ingredient-button" onClick={props.onBtnClick}>{props.icon} <span>{props.name}</span></button>
            <p className="ingredient-count">x{props.count}</p>
            <button type="button" className='ingredient-remove' onClick={props.onRemoveBtnClick}>Убрать ингредиент</button>
        </div>
    );
};

export default Ingredient;