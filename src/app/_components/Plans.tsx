import GlowButton from '@/components/GlowButton'
import { plans } from '@/constants'
import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

type CardProps = {
    title: string,
    isTopSeller: boolean,
    price: string,
    features: string[]
}

const Card = ({features,isTopSeller,price,title}:CardProps) =>{
    return (
        <div className={`w-full ${isTopSeller?'':'border-2 border-white/10'} backdrop-blur-2xl overflow-hidden relative h-[550px] rounded-xl p-5`}>
            {
                isTopSeller && (
                    <div className="absolute bg-black left-0 top-0 w-full h-full">
                        <div className="relative w-full h-full">
                            <span className='absolute bottom-0 h-full w-full block bg-purple-bottom-gradient'/>
                            <span className="bg-[url(/images/grid.png)] opacity-40 bg-cover block w-full h-full"/>
                            <span className='absolute bottom-0 h-full w-full rotate-180 block bg-[linear-gradient(to_bottom,_transparent,_black_95%)]'/>
                        </div>
                    </div>
                )
            }
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div>
                        <p className='capitalize text-3xl mb-2'>{title}</p>
                        <p className='text-white/60 text-xl'>{price}</p>
                    </div>
                    <div className='w-full h-[1px] my-6 bg-white/15'/>
                    <ul className=' flex flex-col gap-4'>
                        {
                            features.map((feature,idx) => (
                                <li className='flex gap-2 items-center' key={idx}>
                                    <IoMdCheckmark/>
                                    <span>{feature}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <GlowButton tw_bg_color={isTopSeller?'bg-medium-purple/60':undefined}>
                    join waitlist
                </GlowButton>
            </div>
        </div>
    )
}
function Plans() {
    return (
        <section>
            <div className="container">
                <div className="text-center mb-28">
                    <h4 className='text-7xl mb-8'>Pricing</h4>
                    <p className='text-2xl mx-auto w-[450px] font-thin'>Choose the right plan to meet your SEO needs and start optimizing today.</p>
                </div>
                <div className="relative">
                    <span 
                    className="absolute 
                        bg-dark-purple/60 lg:bg-dark-purple blur-[150px]
                        block w-2/4 rounded-[50px] h-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    />
                    <div className="grid justify-center grid-cols-[repeat(auto-fit,minmax(300px,350px))] gap-y-8 gap-x-3">
                        {
                            plans.map((plan,idx) => <Card key={idx} {...plan}/>)
                        }
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Plans