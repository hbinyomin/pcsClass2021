import React, { Component } from 'react';
import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function RecipeDetails() {
  const [showPicture, setShowPicture] = useState(true);
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`/data/${id}.json`);
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        const recipe = await r.json();
        setRecipe(recipe);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [id]);

  if (! recipe) {
    return <div>Loading...</div>;
  }

  const { name, ingredients, directions, picture } = recipe;
  return (
    <>
      <h2>{name}</h2>
      {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
      <br />
      <button onClick={() => setShowPicture(!showPicture)} className="btn btn-secondary">{showPicture ? 'hide' : 'show'}</button>
      <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="directions" items={directions} />

      <Link to='/recipe/1'>to pizza</Link>
    </>
  );
}
