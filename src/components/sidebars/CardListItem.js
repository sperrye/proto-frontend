import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateCard } from '../../actions'

const CardListItem = ({ name, selected, dataid, projectCards, updateCard }) => {

  const toggleSelected = (e) => {
    //get clicked dataid
    const cardId = e.target.getAttribute('dataid')

    //find by id in redux state
    const clickedCard = projectCards.all.filter(el => {
      return el._id === parseInt(cardId)
    })

    //toggle is_selected
    if (clickedCard[0].is_selected === false) {
      clickedCard[0].is_selected = true
    } else {
      clickedCard[0].is_selected = false
    }

    //send to ACTIONS 
    updateCard(clickedCard)
  }

  return (
    <div onClick={ toggleSelected }
      dataid={ dataid }
      className={`card-list-item ${ selected ? 'selected-card-item' : ''}`}>
      <i className="material-icons card-list-item-symbol">content_copy</i>
      <span className="card-list-item-name">{ name }</span>
    </div>
  )
}

const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators( { updateCard }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardListItem)
