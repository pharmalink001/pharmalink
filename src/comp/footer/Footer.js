import React from 'react'
import './footer.css'
import logo from '../landing page/img/logo.png'
const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-info-container-withlogo'>
        <div className='footer-sign-up-container'>
          <span>Sign Up For Our Newsletter</span>
        
          <span>We Help You To Verify The Authenticity
            Of Your Drugs And Sell Your Drugs The
            Legal Way Before It Expires To Avoid
            Loss Of Money And Life

            </span>
        </div>
        <div>
    <img src={logo}/>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <div >
              <form className='form-input-container'>
                <input type="search"  className='footer-search-box-search' placeholder='search'/>
                <button type='submit' className="icon footer-search-icon">
                <span className="material-symbols-outlined" > search</span>
                </button>
              </form>
              
            </div>
          </div>
        </div>
        <div className='footer-link-container'>
          <div><strong>Quick Links</strong></div>
          <div><strong>Services</strong></div>
          <div><strong>Social Media</strong></div>
          <div>hell4o</div>
          <div>hello5</div>
          <div>hello6</div>
          <div>hello7</div>
          <div>hello8</div>
          <div>9</div>
          <div>hell10o</div>
        </div>
      </div>
    </div>
  )
}

export default Footer