import { testimonials } from '@/constants'
import React from 'react'

function Testimonials() {
    return (
        <section className='my-10'>
            <div className="container mt-20">
                <div className=" text-center mb-32">
                    <h3 className='text-7xl mx-auto mb-6'>Our clients</h3>
                    <p className='text-2xl mx-auto w-[450px] font-normal'>Hear firsthand how our solutions have boosted online success for users like you.</p>
                </div>
            </div>

            <div>
                {
                    testimonials.map((test,idx) => (
                        <div key={idx} className="container">
                            <div className=" flex justify-center relative">

                                    <div className="md:flex-row items-center flex-col flex w-fit">
                                        <div className="md:static h-[220px] relative">
                                            <div className="relative h-full aspect-square">
                                                <img 
                                                    src={test.imageURL} 
                                                    className='h-full w-full relative z-10  object-cover' 
                                                    alt="img" 
                                                />
                                                <span className="test_vertical_line left-[100%]"/>
                                                <span className="test_vertical_line right-[100%]"/>
                                                <div className="absolute w-full top-0 left-0 aspect-square bg-dark-purple blur-[170px]"/>
                                            </div>
                                            <span className='test_horizontal_line top-[100%]' />
                                            <span className='test_horizontal_line bottom-[100%]' />
                                        </div>

                                        <div className="md:ml-5 mt-8 md:mt-0 h-full relative z-10 flex flex-col justify-between w-full text-center md:text-left md:w-[270px] lg:w-[350px] py-5">
                                            <p className='md:text-xl text-2xl max-w-[400px] lg:text-2xl mb-5'>{test.description}</p>
                                            <p className='text-xl mb-2 md:text-lg lg:text-xl'>{test.name}</p>
                                            <p className='lg:text-lg text-white/60'>{test.job}</p>
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