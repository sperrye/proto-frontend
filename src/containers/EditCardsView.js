import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class EditCardsView extends Component {

  state = {}

  render () {
    return (
      <div>hiya, this is the edit cards view

      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardsView)
