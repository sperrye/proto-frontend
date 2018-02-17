import React from 'react'

const CardListItem = ({ name }) => (
  <div className="card-list-item">
    <i className="material-icons">content_copy</i>
    <span>{name}</span>
  </div>
)

export default CardListItem
