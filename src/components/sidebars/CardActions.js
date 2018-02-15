import React from 'react'

const CardActions = ({}) => (
  <div className="m-1 card-actions">
    <div className="mtb-05 local-action">
      <i class="material-icons">check_box</i>
      <span>Select All</span>
    </div>
    <div className="mtb-05 local-action">
      <i class="material-icons">add</i>
      <span>Add Card</span>
    </div>
    <div className="mtb-05 local-action">
      <i class="material-icons">print</i>
      <span>Print Selected</span>
    </div>
    <div className="mtb-05 local-action">
      <i class="material-icons">delete</i>
      <span>Delete Selected</span>
    </div>
  </div>
)

export default CardActions