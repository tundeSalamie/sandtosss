import React from 'react';


import ReviewSlider from './Slider/ReviewSlider';

//CSS
import "./reviews.css";



const Reviews = () => {
  return (
    <div className="review" id='review'>
            <div className='review-container'>
              <div className='review-top'>
                <h5>Reviews</h5>
              </div>
              <div className='review-footer'>
                <h1>What People Already Saying</h1>
              </div>
              <div className='review-content'>
                <ReviewSlider />
              </div>
              
            </div>
        </div>
  )
}

export default Reviews;