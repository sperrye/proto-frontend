import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CarouselCard from '../components/editcenter/CarouselCard'

const EditCenterCarousel = ({ projectCards }) => {
  console.log(projectCards, "projectCards");
  return (
    <div className="carousel-container">
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
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
)(EditCenterCarousel)
