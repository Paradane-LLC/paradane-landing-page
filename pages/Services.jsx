import React from 'react'
import Servicesbackground from '../public/Servicesbackground'




function Services() {
  return (
    <div className='relative min-h-screen bg-[#00489c]/80'>
        <Servicesbackground />
        <div className='relative z-10 flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl font-bold'>Our Services</h1>
            <p className='text-lg mt-4 max-w-2xl text-center'>
                We offer a wide range of services to help your business thrive in the digital age. From custom software development to cloud solutions, our team of experts is here to support your growth and innovation.
            </p>
        </div>
    </div>
  )
}

export default Services
