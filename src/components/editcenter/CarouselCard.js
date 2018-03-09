import React from 'react'

const CarouselCard = ({ title }) => (
  <div className="m-1 carousel-card-wrapper">
    <div className="m-1 carousel-card"></div>
    <div className="carousel-card-name txt-ctr white">
      { title }
    </div>
  </div>
)

export default CarouselCard
