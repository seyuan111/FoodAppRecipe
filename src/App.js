import {useState, useEffect} from 'react'
import './App.css';
import Navbar from './component/Navbar'
import RecipeList from './component/RecipeList'

const RecipeAPIURL = 'www.themealdb.com/api/json/v1/1/search.php?s='

function App() {

  const [loading, setLoading] = useState(false)
  const [select, setSelect] = useState("")
  const [recipes, setRecipes] = useState([])

  const searchRecipe = async () => {
    setLoading(true)
    const Url = RecipeAPIURL + select;
    const res = await fetch(Url);
    const data = await res.json();
    setRecipes(data.meals)
    setLoading(false)

  };

  useEffect(() => {
    searchRecipe();
  },[])

  const handleSubmit = event => {
    event.preventDefault()
    searchRecipe()
  }

  return (
    <div className="container">
      <h1>Recipes</h1>
      <Navbar 
        handleSubmit={handleSubmit}
        value={select}
        onChange={(event) => setSelect(event.target.value)}
        loading={loading}
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe => (
          <RecipeList 
            key={recipe.idMeal}
            recipe={recipe}
          />
        )) : "No Recipe found"}
      </div>
    </div>
  );
}

export default App;
