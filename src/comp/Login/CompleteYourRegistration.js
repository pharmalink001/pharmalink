import React from 'react'
import Nav from '../landing page/Nav'

const CompleteYourRegistration = ({setactive,active}) => {
  return (
      <>
      
    <div className='Login-page-container'>
        <div>
           <div className='login-page-header'>
                <div className='login-page-header-login'>Complete your Registration</div>
                 <span>For the purpose of identification,your information is needed...</span>
                                        
           </div>
           <form className='login-input-detials-contianer'>
            <input placeholder='Enter email' className='login-input-detials' type='email' id="email"/>
        
            <button type='submit'>Verify</button>
            <span>Your info. is safely secured</span>
           </form>
        </div>
        <div className='login-side-pics'></div>
    </div>
    </>
  )
}

export default CompleteYourRegistration