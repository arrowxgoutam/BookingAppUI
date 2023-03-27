import React from 'react'

const MailList = () => {
  return (
    <div className='mailList'>
        <div className="mailBox">
            <div className="mailTitle">
                <h1>Save time, save money!</h1>
                <p>Sign up and we'll send the best deals to you</p>
            </div>
            <div className="mailBoxCon">
                <input type="text" placeholder='Your Email..' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default MailList