import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditCenterMain = () => {
  return (

      <div className="current-card-wrapper">
        <div className="current-card"></div>
        <div className="mtb-1 txt-ctr white">Card Name</div>
      </div>

  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCenterMain)
