import { clients } from '@/constatnts'
import React from 'react'

function Clients() {
    return (
        <section className='mt-40'>
            <div className="container">
                <p className='text-center mb-4 text-white/60 text-lg'>Trusted by the world’s most innovative teams</p>
                <div className="w-full mt-14 grid gap-5 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
                    {
                        clients.map((client,idx) => (
                            <div key={idx} className="w-full flex border-white/30 border p-5 justify-center items-center">
                                <p className='text-5xl capitalize'>{client}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Clients