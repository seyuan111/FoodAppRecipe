import React from 'react'

const RecipeList = ({recipe}) => {
    const {idMeal,strMeal,strCategory, strMealThumb} = recipe;
  return (
    <div className="list">
        <img 
            src={strMealThumb}
            alt={strMeal}
            className="card-image"
        />
        <div className='card-body'>
            <span className="typeOfFood">{strCategory}</span>
            <h3>{strMeal}</h3>
            <a href={'https://www.themealdb.com/meal/' + idMeal} target="_blank">Ingredients</a>
        </div>
    </div>
  )
}

export default RecipeList