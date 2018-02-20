import React from 'react'
import { connect } from 'react-redux'

const CardActions = ( ) => {

  const openAddCardModal = () => {
    const modalAddCard = document.querySelector('.modal-add-card')
    modalAddCard.classList.remove('hide')
  }

  return (
    <div className="m-1 card-actions">
      <div className="mtb-05 local-action">
        <i className="material-icons">check_box</i>
        <span>Select All</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">check_box_outline_blank</i>
        <span>Unselect All</span>
      </div>
      <div onClick={ openAddCardModal } className="mtb-05 local-action" id="add-card">
        <i className="material-icons">add</i>
        <span>Add Card</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">print</i>
        <span>Print Selected</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">delete</i>
        <span>Delete Selected</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardActions)
