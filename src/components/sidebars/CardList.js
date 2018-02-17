import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CardListItem from './CardListItem'

class CardList extends Component {

  state = {}

  render () {
    return <div className="mtb-1 card-list">
      <CardListItem />
      <CardListItem />
      <CardListItem />
    </div>
  }
}


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
