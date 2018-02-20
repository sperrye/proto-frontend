import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProjectCard } from '../../actions'

const CardActions = ( { addProjectCard } ) => {

  const addCard = () => {
    const modalAddCard = document.querySelector('.modal-add-card')

    modalAddCard.classList.remove('hide')

    const newCard = {
      _id: 3,
      name: 'A NEW card',
      project_id: 1,
      quantity: 5,
      properties: [
        { field_id: 'title', content: 'This is NEW!' },
        { name: 'Cost', field_id: 'B', content: '10 :coin:' }
      ]
    }

    addProjectCard(newCard)
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
      <div onClick={addCard} className="mtb-05 local-action" id="add-card">
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addProjectCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardActions)
