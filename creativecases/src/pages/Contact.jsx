import React from 'react'
import Layout from "../pages/Layout";
function Contact() {
  return (
    <>
    <Layout />
    <section className="contact-wrapper">
      <div className="explain-wrapper">
      <h1 className="contact-title">Contact us</h1>
      <p className="explain-contact">Provide feedback or a problem and we'll solve it as soon as possible</p>
      </div>
      <form action="submit" className="contact-form">
        <input type="text" className="form-name" placeholder="name"/>
        <input type="" className="form-email" placeholder='email'/>
        <textarea name="" id="" cols="30" rows="10" className="form-message" placeholder='message'></textarea>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </section>
    </>
  )
}

export default Contact