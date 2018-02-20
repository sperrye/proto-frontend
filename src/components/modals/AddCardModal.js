import React, { Component } from 'react'
import bindActionCreators from 'redux'
import { connect } from 'react-redux'

class AddCardModal extends Component {
  state = {}

  render () {
    return (
      <div>

        <div className="dark-overlay">
        </div>

        <div className="modal">
          <div className="modal-close">
            <span>Add New Card</span>
            <i className="material-icons close-icon">close</i>
          </div>

          <div className="mtb-2">
            <div>
              <h3>Title</h3>
              <input type="text" name="cardTitle"></input>
            </div>
            <div className="checkbox-option mtb-05">
              <i className="material-icons small-icon mr-05">check_box</i>
              <span>Display Title on card</span>
            </div>
          </div>

          <div className="mtb-2">
            <h3>Quantity</h3>
            <input type="text" name="cardQuantity"></input>
          </div>

          <button className="green">Add New Card</button>

        </div>

      </div>

    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardModal)
