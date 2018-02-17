import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'

const CardList = ({ projectCards }) => {

  return (
    <div className="mtb-1 card-list">
      {projectCards.all.map((el, i) => {

        //get title content
        for(var j in el.properties){
          if(el.properties[j].field_id === 'title'){
            return <CardListItem name={el.properties[j].content} key={i} />
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
