import React from 'react'
import ListComponent from './ListComponent';

export default function RecipeDetails(props) {
  const { name , ingredients, directions } = props.recipe;
  return (
    <>
      <h2>{name}</h2>
      <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="directions" items={directions} />
    </>
  )
}
