import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addProjectCard } from '../../actions'

class AddCardModal extends Component {
  state = {}

  closeModal = () => {
    const modalAddCard = document.querySelector('.modal-add-card')
    modalAddCard.classList.add('hide')
  }

  addCard = (e) => {
    e.preventDefault()

    const newCardTitle = document.querySelector('#card-title').value
    const newCardQuantity = document.querySelector('#card-quantity').value

    const newCard = {
      project_id: 1,
      quantity: newCardQuantity,
      properties: [
        { name: 'title', field_id: '1', content: newCardTitle }
      ]
    }

    this.props.addProjectCard(newCard)
    this.closeModal()
  }

  render () {
    return (
      <div className="modal-wrapper modal-add-card hide">

        <div className="dark-overlay" onClick={ this.closeModal }>
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Add New Card</span>
            <i className="material-icons close-icon" onClick={ this.closeModal }>close</i>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Title</h3>
              <input type="text" name="cardTitle" id="card-title" className="modal-input"></input>
            </div>
            <div className="checkbox-option mtb-05">
              <i className="material-icons small-icon mr-05">check_box</i>
              <span>Display Title on card</span>
            </div>
          </div>

          <div className="mtb-2">
            <h3>Quantity</h3>
            <input type="text" name="cardQuantity" id="card-quantity" className="modal-input"></input>
          </div>

          <button onClick={ this.addCard } className="green">Add New Card</button>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addProjectCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal)
