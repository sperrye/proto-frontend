import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const EditCenterCarousel = () => {
  return (
    <div className="carousel-container">

      <div className="m-1 carousel-card-wrapper">
        <div className="m-1 carousel-card"></div>
        <div className="carousel-card-name txt-ctr">
          Card Name
        </div>
      </div>

      <div className="m-1 carousel-card-wrapper">
        <div className="m-1 carousel-card"></div>
        <div className="carousel-card-name txt-ctr">
          Card Name
        </div>
      </div>

      <div className="m-1 carousel-card-wrapper">
        <div className="m-1 carousel-card"></div>
        <div className="carousel-card-name txt-ctr">
          Card Name
        </div>
      </div>

      <div className="m-1 carousel-card-wrapper">
        <div className="m-1 carousel-card"></div>
        <div className="carousel-card-name txt-ctr">
          Card Name
        </div>
      </div>


    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCenterCarousel)
