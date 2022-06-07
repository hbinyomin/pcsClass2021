import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';

class App extends Component {
  state = {
    recipes: [
      {
        id: 1,
        name: 'Pizza',
        ingredients: ['dough', 'tomato', 'cheese'],
        directions: ['mix', 'bake', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvN1PSDxd-BLz0GkvhLbrehSXm7b7AMQsJOw&usqp=CAU'
      },
      {
        id: 2,
        name: 'Burger',
        ingredients: ['buns', 'meat', 'tomato'],
        directions: ['slice', 'grill', 'eat'],
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKKB9oMfqOovzgqR0B7ws7aOiJtvhpHOqDw&usqp=CAU'
      }
    ]
  }

  render() {
    /*const recipeDetails = this.state.selectedRecipe !== undefined || null ?
      <RecipeDetails recipe={this.state.recipes[this.state.selectedRecipe]} /> :
      null;*/

    return (
      <div className='container-fluid'>
        <div className='text-center'>
          <Header />
          <Routes>
            <Route index element={<RecipeList recipes={this.state.recipes} />} />

            <Route path='/recipe/:id' element={<RecipeDetails recipes={this.state.recipes} />} />

            {/*<Route path='*' element={<h5 style={{ color: 'red' }}>This is not the page you are looking for - 404</h5>} />*/}

            <Route path='*' element={<Navigate to='/' replace="true"/>} />
          </Routes>
          <Outlet />
          <hr />
          <ClickCounter />
        </div>
      </div>
    );
  }
}

export default App;
