import React, { Component } from 'react';
import ListComponent from './ListComponent';

export default class RecipeDetails extends Component {
  state = {
    showPicture: true
  }

  togglePicture = () => {
    this.setState({
      showPicture: !this.state.showPicture
    });
  }

  render() {
    const { name, ingredients, directions, picture } = this.props.recipe;
    return (
      <>
        <h2>{name}</h2>
        {this.state.showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
        <br/>
        <button onClick={this.togglePicture} className="btn btn-secondary">{this.state.showPicture?'hide':'show'}</button>
        <ListComponent title="Ingredients" items={ingredients} />
        <ListComponent title="directions" items={directions} />
      </>
    );
  }
}
