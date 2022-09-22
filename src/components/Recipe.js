import './Recipe.css'
import { useState, useEffect } from 'react'
import RecipeCard from './RecipeCard';
import SearchBar from './SearchBar';

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

function Recipe() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //function - buscar dados da api
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals)
    setIsLoading(false);
    console.log(data)
  };

  useEffect(() => {
    searchRecipes()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchRecipes()
  }



  return (
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar
        handleSubmit={handleSubmit}  
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        isLoading={isLoading}

    />
      <div className="recipes">
        {recipes ? recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
          />
        )): "Nao tem"}

      </div>
    </div>
  );
}

export default Recipe;
