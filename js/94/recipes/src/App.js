import './App.css';
import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header';

class App extends Component {
  /*state = {
    recipes: []
  }

  async componentDidMount() {
    try {
      const r = await fetch('/data/recipes.json');
      if (!r.ok) {
        throw new Error(`${r.status} ${r.statusText}`);
      }
      const recipes = await r.json();
      this.setState({ recipes });
    } catch(e) {
      console.error(e);
    }
  }*/

  render() {
    return (
      <div className='container-fluid'>
        <div className='text-center'>
          <Header />
          <Routes>
            {/*<Route index element={<RecipeList recipes={this.state.recipes} />} />*/}
            <Route index element={<RecipeList />} />

            <Route path='/recipe/:id' element={<RecipeDetails />} />

            <Route path='*' element={<Navigate to='/' replace="true" />} />
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
