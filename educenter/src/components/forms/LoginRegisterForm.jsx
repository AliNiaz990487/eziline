import React from 'react'

const LoginRegisterForm = ({isRegister}) => {
  return (
    <div>
      <input className='border fs-5 tw-font-normal tw-mt-4 tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="text" placeholder='Phone'/>
      <input className='border fs-5 tw-font-normal tw-mt-4 tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="text" placeholder='Name'/>
      { isRegister &&
      <input className='border fs-5 tw-font-normal tw-mt-4 tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="email" placeholder='Email'/>
      }
      <input className='border fs-5 tw-font-normal tw-mt-4 tw-p-4 tw-w-full focus-within:tw-outline-none focus:tw-border-color-primary tw-transition-colors' type="passwrod" placeholder='Password'/>
    </div>
  )
}

export default LoginRegisterForm
