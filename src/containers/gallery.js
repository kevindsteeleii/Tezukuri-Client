import React, { Component } from 'react';
import GalleryCard from '../components/galleryCard';
import _help from '../helper';
import '../_css/gallery.css';
import { connect } from 'react-redux';

class Gallery extends Component {
  state = {
    category: ""
  }

  // create sample cards to populate gallery will be replaced with actual backend stuff later
  dummyGallery = (cardNum) => {
    const cardArr = [];
    for (let i = 0; i < cardNum; i++) {
      let tempKey = _help.generateRandomString(12);
      let tempCard = <GalleryCard key={tempKey} />
      cardArr.push(tempCard);
    }
    return cardArr;
  }

  render(){
    const { dummyNumber } = this.props;
    const testGallery = this.dummyGallery(dummyNumber);
    return (
      <div id="gallery">
        {testGallery}
      </div>
    )
  }
}

// need the current category and it's cards or what have you
const mapStateToProps = state => ({
  base: state.base
});

// probably the pagination stuff
/* const mapDispatchToProps = state => ({

}); */

export default connect(mapStateToProps)(Gallery);
