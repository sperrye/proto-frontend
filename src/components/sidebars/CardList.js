import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'

const CardList = ({ projectCards }) => {
  console.log(projectCards.all, "projectCards");
  return (
    <div className="mtb-1 card-list">
      {projectCards.all.map((el, i) => {
        return <CardListItem name={el.name} key={i} />
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
