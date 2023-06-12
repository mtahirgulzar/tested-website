import Link from 'next/link'
import React from 'react'

const getknowcard = ({title, description,btn}) => {
  return (
    <div>
        <div className='py-[39px] px-[17.2px] shadow-xl rounded-2xl'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[30px] leading-[59px] text-[#14142a] font-[700]'>{title}</h2>
                <p className='mb-[20px] text-[14px] leading-[24px] text-[#4e4b66]'>{description}</p>
                <Link href="/meet-our-dentists-staffs" legacyBehavior>
                  <a href=""  className='py-[12px] px-[24px] rounded-3xl bg-[#5F2EEA] text-white text-[15px] leading-[24px] font-[500]'>{btn}</a>
                </Link>
            </div>
            
        </div>
      
    </div>
  )
}

export default getknowcard
