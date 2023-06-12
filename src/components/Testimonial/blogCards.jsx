import React from 'react'

const blogCards = ({description,title}) => {
  return (
    <div>
        <div className=''>
            <div className='shadow-xl rounded-2xl'>
                <div className='p-[16px]'>
                    <p className='text-[15px] mb-[20px] font-[400] text-[#4E4B66]'>{description}</p>
                    <h2 className='text-[14px] font-[600] leading-[1.5px]'>{title}</h2>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default blogCards

