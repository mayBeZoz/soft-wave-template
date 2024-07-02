import { services } from '@/constants'
import React from 'react'

function Services() {
    return (
        <section className='bg-gradient-to-br  py-20 from-[-400%]  from-dark-purple to-transparent'>
            <div className="container ">
                <h5 className='text-4xl sm:text-6xl mb-10 w-[350px]'>Elevate your SEO efforts.</h5>

                <div className="w-full grid gap-y-10 gap-x-16 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
                    {
                        services.map((service,idx) => (
                            <div className="w-full text-lg">
                                <div className='flex items-center mb-3 gap-1'>
                                    <span>{service.icon}</span>
                                    <h6>{service.title}</h6>
                                </div>

                                <p className='w-full text-white/70'>{service.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services