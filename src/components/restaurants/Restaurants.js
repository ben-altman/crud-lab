import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  renderRestaurants = () => {
    return this.props.restaurants.map( restaurant => (
       
      <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.deleteRestaurant} />
    ))
  }

  render() {
    return(
      <ul>
        {/* {console.log(this.props)} */}
        {this.renderRestaurants()}
        {/* Restaurants Component */}
      </ul>
    );
  }
};

export default Restaurants;