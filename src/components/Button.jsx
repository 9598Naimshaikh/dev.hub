import React from 'react'

const Button = ({children}) => {
  return (
    <button className='px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 hover:scale-110 duration-200 transition-transform active:scale-90 cursor-pointer'>
      {children}
    </button>
  )
}

export default Button
