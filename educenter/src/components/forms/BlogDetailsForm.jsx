import React from 'react'

const BlogDetailsForm = () => {
  return (
    <div className='container tw-pt-16'>
        <div className="row tw-pb-8">
            <div className="col12 col-md-6">
                <input className='border tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="text" placeholder='Full Name'/>
            </div>
            <div className="col12 col-md-6 tw-pt-8 md:tw-pt-0">
                <input className='border tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="email" placeholder='Email Address'/>
            </div>
            <div className='tw-pt-8'>
                <textarea className='border tw-p-4 tw-w-full tw-min-h-40 focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' name="" id="" placeholder='Comment Here...'></textarea>
            </div>
        </div>
        <a href="" className="btn btn-primary">Post Comment</a>
    </div>
  )
}

export default BlogDetailsForm
