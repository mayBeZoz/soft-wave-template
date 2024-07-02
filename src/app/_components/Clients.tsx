import { clients } from '@/constants'
import React from 'react'

function Clients() {
    return (
        <section className='mt-40'>
            <div className="container">
                <p className='text-center mb-4 text-white/60 text-lg'>Trusted by the world’s most innovative teams</p>
                <div className="w-full mt-14 grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
                    {
                        clients.map((src,idx) => (
                            <div key={idx} className="w-full h-[100px] flex border-zinc-800 border-2 rounded-lg p-5 justify-center items-center">
                                <img src={src} className='w-[150px] object-contain'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients