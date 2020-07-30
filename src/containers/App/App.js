import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';
import Ingredients from "../../components/Ingredients/Ingredients";
import BreadTop from "../../components/BurgerComponents/Bread/BreadTop";
import BreadBottom from "../../components/BurgerComponents/Bread/BreadBottom";
import Meat from "../../components/BurgerComponents/Meat/Meat";
import Bacon from "../../components/BurgerComponents/Bacon/Bacon";
import Cheese from "../../components/BurgerComponents/Cheese/Cheese";
import Salad from "../../components/BurgerComponents/Salad/Salad";

import {GiMeat} from "react-icons/gi";
import {FaBacon} from "react-icons/fa";
import {FaCheese} from "react-icons/fa";
import {GiThreeLeaves} from "react-icons/gi";

const App = () => {
  const [ingredient, setIngredient] = useState({
    ingredients: [
      {name: 'Meat', price: 50, count: 0, id: nanoid(), icon: <GiMeat />},
      {name: 'Bacon', price: 30, count: 0, id: nanoid(), icon: <FaBacon />},
      {name: 'Cheese', price: 20, count: 0, id: nanoid(), icon: <FaCheese />},
      {name: 'Salad', price: 5, count: 0, id: nanoid(), icon: <GiThreeLeaves />}
    ],
    price: 20
  });

  const [burgerComponents, setBurgerComponents] = useState([]);

  const addIngredient = id => {
    const index = ingredient.ingredients.findIndex(elem => elem.id === id);
    const ingredients = [...ingredient.ingredients];
    const totalPrice = ingredients[index].price + ingredient.price;
    const burgerComponentsCopy = [...burgerComponents];
    ingredients[index].count++;
    switch (ingredients[index].name) {
      case "Meat":
        burgerComponentsCopy.push({name: 'Meat', code: <Meat key={nanoid()}/>});
        break;
      case "Bacon":
        burgerComponentsCopy.push({name: 'Bacon', code: <Bacon key={nanoid()}/>});
        break;
      case "Cheese":
        burgerComponentsCopy.push({name: 'Cheese', code: <Cheese key={nanoid()}/>});
        break;
      case "Salad":
        burgerComponentsCopy.push({name: 'Salad', code: <Salad key={nanoid()}/>});
        break;
      default:
        break;
    }
    setIngredient({ingredients, price: totalPrice});
    setBurgerComponents(burgerComponentsCopy);
  }

  const removeIngredients = (id) => {
      const indexIngred = ingredient.ingredients.findIndex(elem => elem.id === id);
      const ingredients = [...ingredient.ingredients];
      const burgerComponentsCopy = [...burgerComponents];
      let totalPrice;
      if(ingredients[indexIngred].count <= 0) {
        totalPrice = ingredient.price;
      } else {
        const deleteComponent = burgerComponentsCopy.findIndex(item => item.name === ingredients[indexIngred].name);
        burgerComponentsCopy.splice(deleteComponent, 1);
        ingredients[indexIngred].count--;
        totalPrice = ingredient.price - ingredients[indexIngred].price;
      }
      setIngredient({ingredients, price: totalPrice});
      setBurgerComponents(burgerComponentsCopy);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Ingredients
            ingredients={ingredient.ingredients}
            addIngredients={addIngredient}
            removeIngredients={removeIngredients}
            price={ingredient.price}
        />
        <div className="Burger">
          <h4>Бургер</h4>
          <BreadTop />
          {burgerComponents.map(item => item.code).reverse()}
          <BreadBottom />
        </div>
      </div>
    </div>
  );
}

export default App;
