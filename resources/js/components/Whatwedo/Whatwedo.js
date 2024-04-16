import React from 'react';
import WedoSlider from './Slider/WedoSlider';
import Typical from 'react-typical';

// CSS
import "./whatwedo.css";




const Whatwedo = () => {
  return (
    <div className="whatwedo" id='whatwedo'>
            <div className='wedo-container'>
              <div className='wedo-top'>
                <h5>How It Works.</h5>
              </div>
              {/* <div className='wedo-footer'> */}
                {/* <h1>You Can{' '}<span className="hashtags"> */}
                  {/* <Typical 
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Toss It',
                    2000,
                    'Keep It',
                    2000,
                  ]}
                  /> */}
                  {/* </span></h1> */}
                {/* On-The-Spot. */}
              {/* </div> */}
              <div className='wedo-content'>
                <WedoSlider />
              </div>
              
            </div>
        </div>
  )
}

export default Whatwedo;