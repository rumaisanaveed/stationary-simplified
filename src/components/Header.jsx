import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/sign-in")
    }
    const handleSignupClick = () => {
        navigate("/sign-up")
    }
  return (
    <div className="flex px-10 py-5 bg-white items-center justify-between w-full sticky top-0 z-10 shadow-sm">
      <div className="flex gap-2 items-center">
        <div className="w-7 h-7 bg-gray-300 rounded"></div>
        <p className="text-xs">Stationary Simplified</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="font-sm text-[#808080]">Home</a>
        <a href="#" className="font-sm text-[#808080]">How it Works?</a>
        <a href="#" className="font-sm text-[#808080]">Pricing</a>
        <a href="#" className="font-sm text-[#808080]">Testimonials</a>
      </div>
      <div className="flex gap-2">
        <div className="px-6 py-2 rounded border border-[#55A4FF] cursor-pointer" onClick={handleSignInClick}>
          <p className="text-xs text-[#55A4FF]">Sign In</p>
        </div>
        <div className="px-6 py-2 rounded border bg-[#55A4FF] cursor-pointer" onClick={handleSignupClick}>
          <p className="text-xs text-white">Sign Up</p>
        </div>
      </div>
    </div>
  )
}
