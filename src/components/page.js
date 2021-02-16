import React from 'react'

export const Page = ({children, className}) => {
  return (
    <div className={`mt-12 p-8 bg-red-500 rounded shadow-xl ${className ? className : ''}`}>
      {children}
    </div>
  )
}
