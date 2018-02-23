import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectCard } from '../../actions'

const CardActions = ( { projectCards, selectCard } ) => {

  const openAddCardModal = () => {
    const modalAddCard = document.querySelector('.modal-add-card')
    modalAddCard.classList.remove('hide')
    let clearTitle = document.querySelector('#card-title')
    let clearQuantity = document.querySelector('#card-quantity')
    clearTitle.value = ''
    clearQuantity.value = ''
  }

  const selectAll = () => {
    //get all project cards from state
    //use map to change is_selected on all of them
    //call a function in ACTIONS to change state
  }

  return (
    <div className="m-1 card-actions">
      <div onClick={ openAddCardModal } className="mtb-05 local-action" id="add-card">
        <i className="material-icons">add</i>
        <span>Add Card</span>
      </div>
      <div onClick={ selectAll } className="mtb-05 local-action">
        <i className="material-icons">check_box</i>
        <span>Select All</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">check_box_outline_blank</i>
        <span>Unselect All</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">delete</i>
        <span>Delete Selected</span>
      </div>
      <div className="mtb-05 local-action">
        <i className="material-icons">print</i>
        <span>Print Preview</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { selectCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardActions)
