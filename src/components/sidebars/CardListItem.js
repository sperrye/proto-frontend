import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateCard } from '../../actions'

const CardListItem = ({ name, selected, dataid, projectCards, updateCard }) => {

  const toggleSelected = (e) => {
    //look in projectCards for this id,
    //and toggle is_selected
    console.log(e.target.getAttribute('dataid'));
    
    let changedCard =
    { _id: 222,
      project_id: 1,
      quantity: 3,
      properties: [
        { name: "title", field_id: 'A', content: 'This is UPDATED!' },
        { name: 'Cost', field_id: 'B', content: '2 :coin:' }
      ],
      is_selected: true
    }

    updateCard(changedCard)
    console.log("toggle function");
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
