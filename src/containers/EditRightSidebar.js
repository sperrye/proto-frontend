import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditRightSidebar = () => {
  return (
    <div className="edit-right-sidebar-container">right</div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRightSidebar)
