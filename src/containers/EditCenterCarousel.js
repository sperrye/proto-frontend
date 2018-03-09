import React from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CarouselCard from '../components/editcenter/CarouselCard'

const EditCenterCarousel = ({ projectCards }) => {

  const carouselCards = projectCards.all.filter(el => {
    return el.is_selected === true
  })

  return (
    <div className="carousel-container">
      { carouselCards.map(el => {
        return <CarouselCard key={el._id} title={el.properties[0].content}/>
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
)(EditCenterCarousel)
