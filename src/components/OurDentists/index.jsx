import React from 'react'
import Title from '../common/Title'
import ServiceCard from './ServiceCard'

const OurDentists = ({ data,title }) => {
    return (
        <div className="bg-[#7F7C59]">
            <div className="py-[75px]">
                <Title data={title}/>
                <div className="max-w-[1156px] mx-auto px-4 my-[30px]">
                    <div className="grid  md:grid-cols-2 grid-cols-1 lg:gap-x-[24px] md:gap-x-[16px] sm:gap-y-[26px] gap-y-[24px]">
                        {data?.map((item, index) => (
                          <ServiceCard item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurDentists