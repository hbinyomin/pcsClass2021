import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch('/data/recipes.json');
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const recipes = await r.json();
        setRecipes(recipes);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <>
      <h4>recipes</h4>
      <ul className="bulletless">
        {recipes.map((item, index) => (
          <li key={item.id} >
            <Link to={`/recipe/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
