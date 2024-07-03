import Button from '@/components/Button'
import React from 'react'



const MessageInput = () => {
    return (
        <div className="w-full gap-1 border-2 border-white/15 rounded-lg flex p-1">
            <input 
                placeholder='Your email' 
                type="text" 
                className='placeholder:text-white/40 ml-3 flex-1 p-1 text-xl bg-transparent' 
            />
            <Button>Join waitlist</Button>
        </div>
    )
}
function Contact() {
    return (
        <section className='mt-8 relative'>
            

            <div className="absolute h-full w-full top-0 left-0">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="top-0 bg-[url(/images/grid.png)] w-full h-full left-1/2 -translate-x-1/2 absolute"/>
                    <div className="absolute z-10 w-full h-full top-0 left-0 bg-[linear-gradient(to_top,black_40%,transparent_100%)]"/>
                    <div className="absolute w-2/3 h-2/3 blur-[250px] -top-1/4 left-1/2 bg-medium-purple -translate-x-1/2"/>
                </div>
            </div>
            <div className="container py-32 relative z-10">
                <div className="h-[300px] mx-auto w-full sm:w-[450px] flex flex-col justify-between items-center">
                    <p className='text-center text-6xl sm:text-7xl '>AI-driven SEO for everyone.</p>
                    <MessageInput/>
                    <p className='text-center text-xl flex gap-3 text-white/50'>
                        <span>No credit card required</span>
                        <span>·</span>
                        <span>7-days free trial</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact