import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k8exv8c', 'template_utq2m3v', form.current, {
        publicKey: 'jwF8B8JCGhdnJ7gV6',
      })
      .then(
        () => {
          alert('Email sent successfully!')
          console.log('SUCCESS!');
        },
        (error) => {
          alert('Failed to sent...', error.text)
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-container'>
      <form ref={form} onSubmit={sendEmail} className='form-container'>
        <p>
          Have a question or need support? We're here to help! Please feel free to reach out to our team by filling this form...
        </p>
        <label className='label'>Name</label>
        <input required type="text" name="user_name" className='input-text' placeholder='Enter Your Name'/>
        <label className='label'>Email</label>
        <input required type="email" name="user_email" className='input-text' placeholder='Enter Your Email'/>
        <label className='label'>Message</label>
        <textarea required name="message" className='textarea-input'
        placeholder='Please Write What You Want To Say...'/>
        <input type="submit" value="Send" className='submit-btn'/>
      </form>
    </div>
  )
}

export default Contact
