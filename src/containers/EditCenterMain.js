import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditCenterMain = () => {
  return (
    <div className="edit-center-main-container">center main</div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCenterMain)
