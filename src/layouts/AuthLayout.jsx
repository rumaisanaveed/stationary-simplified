import React from 'react'
import AuthLayoutImage from "../assets/images/authImage.png"
import { Header } from '../components/Header'

export const AuthLayout = ({children}) => {
  return (
    <>
      <Header />
      <div className='flex h-[90vh]'>
          <div className='basis-5/12 px-20 pt-20 pb-12'>{children}</div>
          <div className='basis-7/12 overflow-hidden'>
              <img src={AuthLayoutImage} alt="layout" className='w-full' />
          </div>
      </div>
    </>
  )
}
