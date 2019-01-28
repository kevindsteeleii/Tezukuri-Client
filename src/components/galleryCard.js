import React from 'react';
import path from 'path';
import '../_css/cards.css';

const makeStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    //_REPLACE: key with the UUID or whatever for the particular product item
    let key =  Math.random().toString(36).substring(2, 15);
    if(rating === 0) {
      stars.push(<i key={key} className="far fa-star"/>);
    } else if (rating > 0){
      stars.push(<i key={key} className="fas fa-star"/>);
      rating--;
    }
  }
  return stars;
}

export default function GalleryCard(props) {
  const { rating, title, price } = props;
  const stars = makeStars(rating);
  return (
    <div className="gallery-card">
      <p className="card-title">{title}</p>
      <div className="card-stars">{stars}</div>
      <p className="card-price">${price}</p>
    </div>
  )
}
