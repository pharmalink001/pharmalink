import React from 'react'
import drugImg from '../img/drug1.JPG'
import './card.css'

const Card = () => {
  return (
    <div className='landingpage-drug-card-container'>
        <div className='landingpage-drug-card-img-container'>
            <img className='landingpage-drug-card-img' src={drugImg} />
        </div>
        <div className='landing-page-drug-card-info'>Paracetamol</div>
        <div className='landing-page-drug-card-info'>6 Month shelf Remaining</div>
        <div className='landing-page-drug-card-info'>#700 per card</div>
        <div className='landingpage-drug-card-btn-container'>
            <div>Buy Now</div>
            <div>Add to Cart</div>
        </div>
    </div>
  )
}

export default Card