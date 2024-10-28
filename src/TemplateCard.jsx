import React from 'react'

export const TemplateCard = () => {
  return (
    <div className='w-min-[250px] h-min-[250px] flex flex-col justify-between items-end'>
      <div className="flex flex-col-gap-1">
        <div className='bg-white p-1 rounded-[4px]'>
          <Heart size="16" color="#000000"/>
        </div>
        <div className='bg-white p-1 rounded-[4px]'>
          <Add size="16" color="#000000"/>
        </div>
        <div className='bg-white p-1 rounded-[4px]'>
          <Eye size="16" color="#000000"/>
        </div>
      </div>
    </div>
  )
}
