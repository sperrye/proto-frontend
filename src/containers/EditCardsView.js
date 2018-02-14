import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import EditLeftSidebar from './EditLeftSidebar'
import EditRightSidebar from './EditRightSidebar'
import EditCenterMain from './EditCenterMain'
import EditCenterCarousel from './EditCenterCarousel'

class EditCardsView extends Component {

  state = {}

  render () {
    return (
      <div className="edit-cards-view-container">
        <EditLeftSidebar />
        <div className="edit-center-container">
          <EditCenterMain />
          <EditCenterCarousel />
        </div>
        <EditRightSidebar />
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
