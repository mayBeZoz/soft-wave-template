import { testimonials } from '@/constants'
import React from 'react'

function Testimonials() {
    return (
        <section>
            <div className="container mt-20">
                <div className=" text-center mb-10">
                    <h3 className='text-7xl mx-auto mb-6'>Our clients</h3>
                    <p className='text-2xl mx-auto w-[450px] font-normal'>Hear firsthand how our solutions have boosted online success for users like you.</p>
                </div>
            </div>

            <div>
                {
                    testimonials.map((test,idx) => (
                        <div key={idx} className="container">
                            <div className=" flex justify-center relative">

                                    <div className="h-[220px] flex w-fit">
                                        <div className="md:static relative">
                                            <div className="relative">
                                                <img 
                                                    src={test.imageURL} 
                                                    className='h-full relative z-10 aspect-square object-cover' 
                                                    alt="img" 
                                                />
                                                <div className="absolute w-full top-0 left-0 aspect-square bg-dark-purple/80 blur-[100px]"/>
                                            </div>
                                            <span className='horizontal_gradient_line absolute top-0 left-0' />
                                            <span className='horizontal_gradient_line absolute bottom-0 left-0' />
                                        </div>

                                        <div className="ml-10 h-full flex flex-col justify-between w-[350px] py-5">
                                            <p className='text-2xl mb-5'>{test.description}</p>
                                            <p className='text-xl'>{test.name}</p>
                                            <p className='text-lg text-white/60'>{test.job}</p>
                                        </div>
                                    </div>  

                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default Testimonials