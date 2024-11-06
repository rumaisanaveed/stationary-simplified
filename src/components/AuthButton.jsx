import React from 'react'

export const AuthButton = ({children, className}) => {
  return (
    <button className={`bg-custom-blue-50 rounded w-full p-3 text-white text-sm font-light ${className}`}>{children}</button>
  )
}
