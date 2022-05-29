import React from 'react'
import Nav from '../landing page/Nav'
import ContactFromFeild from './ContactFromFeild'
import ContactHeader from './ContactHeader'

const Contact = ({active,setactive}) => {
  return (
    <div className='Contact-form-header'>
     <Nav active={active} setactive={setactive}/>
    
  {
    active ? null :   <section className='contact-section-container'>
    <ContactHeader/>
  <div className='contact-input-form-container'>
      <div className='contact-form-input-text'>
        <input type="text" placeholder='Name'/> 
        <input type="text" placeholder='Phone Number'/>
        <input type="text" placeholder='Email'/>
      </div>
      <div className='contact-form-input-textarea'>
        <textarea></textarea>
        <button>Send</button>
      </div>
  </div>

  </section> 
  }
    </div>
  )
}

export default Contact