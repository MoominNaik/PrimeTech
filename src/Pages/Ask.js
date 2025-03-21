import React from 'react'
import GetQuoteForm from '../Components/GetQuote/GetQuoteForm'
import './CSS/Ask.css'
import ContactInfo from '../Components/ContactInfo/ContactInfo'

const Ask = () => {
  return (
    <div>
        <div className='ask-welcome-msg'>
        <h2>Get a Quote</h2>
        <p>Fill out the form below and we will get back to you with an estimate</p>
        </div>
        
      <GetQuoteForm/>
      <div className='ask-contact-msg'>
        <h2>Request Consultation</h2>
        <p>Contact us today to help you find the best solution for your needs</p>
        </div>
        <ContactInfo/>
    </div>
  )
}

export default Ask
