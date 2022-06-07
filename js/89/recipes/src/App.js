import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat']
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'meat', 'tomato'],
        directions: ['slice', 'grill', 'eat']
      }
    ]
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>PCS Recipes</h1>
          <hr />
          <ListComponent items={this.state.recipes} />
          <hr />
          <RecipeDetails recipe={this.state.recipes[0]} />
        </div>
      </div>
    );
  }
}

export default App;
