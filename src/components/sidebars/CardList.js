import React from 'react'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'

const CardList = ({ projectCards }) => {
// see ACTIONS > getProjectCards
  return (
    <div className="mtb-1 card-list">
      { projectCards.all.map((el, i) => {
        //get title content
        for(var j in el.properties){
          if(el.properties[j].name === 'title'){
            return <CardListItem name={el.properties[j].content}
            selected={el.is_selected}
            key={el._id}
            dataid={el._id}/>
          }
        }
      })}
    </div>
  )
}


const mapStateToProps = state => ({
  projectCards: state.projectCards
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
