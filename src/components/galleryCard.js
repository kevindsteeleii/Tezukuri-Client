import React from 'react';
import _help from '../helper';
import '../_css/gallery.css';

const makeStars = (rating) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    //_REPLACE: key with the UUID or whatever for the particular product item
    let key = _help.generateRandomString(12);
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
  const { rating, title, price, mainPicture } = props;
  const stars = makeStars(rating);
  return (
    <div className="gallery-card">
      <div className="card-image"
        style={{backgroundImage: `url("/_images/${mainPicture}")`}} />
      <p className="card-title">{title}</p>
      <div className="card-stars">{stars}</div>
      <p className="card-price">${price}</p>
    </div>
  )
}
