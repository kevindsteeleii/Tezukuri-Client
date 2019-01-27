import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../_css/App.css';

const generateCategoryLinks = (categories) => {
  return categories.map(category => 
    {
      return <NavLink className="category-link" key={`${category.toUpperCase()}`} to={`/products/${category}`}>
        {category.charAt(0).toUpperCase()+category.substr(1)}
      </NavLink>
    })
}

function CategoryNav({categories, ...rest}) {
  
  const CategoryLinks = generateCategoryLinks(categories);
  return (
    <div id="category-nav">
      {CategoryLinks}
    </div>
  )
}

export default connect(null)(CategoryNav);