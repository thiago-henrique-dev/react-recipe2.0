import React from 'react'
import './RecipeCard.css'

export default function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
        <img className="card_image"
             src={strMealThumb} 
             alt={strMeal}/>
        <div className="card_body">
            <span className="category">{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={"https://www.themealdb.com/meal" + idMeal} target="_black">Ingredients</a>
        </div>
    </div>
  )
}
