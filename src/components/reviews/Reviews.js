import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  renderReviews = () => {
    return this.props.reviews.map( review => {
      if (this.props.restaurantId === review.restaurantId)
        return <Review key={review.id} review={review} delete={this.props.deleteReview} />
  })
  }

  render() {
    return (
      <ul>
        {console.log(this.props)}
        {this.renderReviews()}
      </ul>
    );
  }
};

export default Reviews;