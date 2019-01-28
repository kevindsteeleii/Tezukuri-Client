import React from 'react'

export default function Category(props) {
  return (<>
    <div id="category-container">
      {props.children}
    </div>
  </>)
}
