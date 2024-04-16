import React from 'react'

//CSS
import "./footer.css";

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();


  return (
    <div className='footer'>
        <div className='footer-container'>
          <p>
            <small>All Rights Reserved &copy; {year} Tosss.me </small>
          </p>
        </div>
    </div>
  )
}

export default Footer