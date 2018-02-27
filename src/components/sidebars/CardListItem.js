import React from 'react'

const CardListItem = ({ name }) => {

  const toggleSelected = (e) => {
    console.log(e.target.classList, "e.target");
    if (e.target.classList.contains('selected-card-item')) {
      e.target.classList.remove('selected-card-item')
    } else {
      e.target.classList.add('selected-card-item')
    }
  }

  return (
    <div onClick={ toggleSelected } className="card-list-item">
      <i className="material-icons card-list-item-symbol">content_copy</i>
      <span className="card-list-item-name">{ name }</span>
    </div>
  )
}

export default CardListItem
