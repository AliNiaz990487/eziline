import React from 'react'

const ContactForm = () => {
  return (
    <form action="">
        <input type="text" className='tw-mb-6 border tw-w-full tw-p-4 focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' placeholder='Your Name'/>
        <input type="email" className='tw-mb-6 border tw-w-full tw-p-4 focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' placeholder='Your Email'/>
        <input type="text" className='tw-mb-6 border tw-w-full tw-p-4 focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' placeholder='Subject'/>
        <textarea name="" id="" className='tw-mb-6 border tw-w-full tw-min-h-36 tw-p-4 focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' placeholder='Your Message'></textarea>
        <a href="" className="btn btn-primary">send message</a>
    </form>
  )
}

export default ContactForm
