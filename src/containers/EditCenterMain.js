import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from './Card';


const EditCenterMain = () => {
  return (

      <div className="current-card-wrapper">
        <div className="current-card">
          <Card />
        </div>
        <div className="mtb-1 txt-ctr">Card Name</div>
      </div>

  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCenterMain)
