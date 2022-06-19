import {useState, useEffect} from 'react'
import './App.css';
import Navbar from './component/Navbar'
import RecipeList from './component/RecipeList'

const Api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setLoading(true);
    const url = Api + select
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h2 className="title">Our Food Recipes</h2>
      <Navbar
        loading={loading}
        value={select}
        handleSubmit={handleSubmit}
        onChange={(event) => setSelect(event.target.value)}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeList
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
  );
}

export default App;

