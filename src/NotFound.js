import React from 'react'
import Nav from './comp/landing page/Nav'
import notfound from './not.gif'
const NotFound = () => {
  return (
    <>
    <div className='notfound'>
    <Nav/>
    </div>
   
    <div id="main">
  <div className="fof">
  <div>
      <img src={notfound}/>
    </div>
    <h1>Page Not Found</h1>
  </div>
</div>

    </>
  )
}

export default NotFound