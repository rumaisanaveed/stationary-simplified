import React from 'react'

export const Tag = ({heading}) => {
  return (
    <div className='border border-white rounded-[4px] py-1 px-[10px]'>
        <p className='text-white text-[10px]'>{heading}</p>
    </div>
  )
}
