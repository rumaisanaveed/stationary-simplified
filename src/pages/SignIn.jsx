import React from 'react'
import { Header } from '../components/Header'
import { AuthLayout } from '../layouts/AuthLayout'
import { Sms } from 'iconsax-react'
import { AuthButton } from '../components/AuthButton'
import { PasswordCheck } from 'iconsax-react'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    const navigate = useNavigate()
    const handleSignUpClick = () => {
        navigate("/sign-up")
    }
  return (
    <AuthLayout>
      <div className='w-full bg-white flex flex-col justify-between items-center h-full'>
            <div className='flex flex-col gap-5 w-full'>
                <h1 className='text-black font-medium text-3xl'>Sign In</h1>
                <form className='flex flex-col w-full gap-6'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <div className='flex items-center gap-2 bg-[#F4F4F4] px-4 py-3 rounded'>
                                <input type="email" placeholder='Email' name='email' className='bg-[#F4F4F4] outline-none p-0 placeholder:text-xs placeholder:text-[#4F4F4F] text-xs text-black w-full' />
                                <Sms color='#4F4F4F' size={16}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="password">Password</label>
                                <div className='flex items-center gap-2 bg-[#F4F4F4] px-4 py-3 rounded'>
                                    <input type="password" placeholder='********' name='password' className='bg-[#F4F4F4] outline-none p-0 placeholder:text-xs placeholder:text-[#4F4F4F] text-xs text-black w-full' />
                                    <PasswordCheck color='#4F4F4F' size={16}/>
                                </div>
                            </div>
                            <p className='self-end text-xs font-normal py-2'>forgot password?</p>
                        </div>
                    </div>
                    <AuthButton>
                        Sign In 
                    </AuthButton>
                </form>
            </div>
            <div>
                <p className='text-xs font-normal'>Don’t have an account? &nbsp;<span className='text-custom-blue-50 font-medium cursor-pointer' onClick={handleSignUpClick}>Sign Up</span></p>
            </div>
      </div>
    </AuthLayout>
  )
}
