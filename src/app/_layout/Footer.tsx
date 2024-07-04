import { footerCols } from '@/constants'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'



function Footer() {
    return (
        <footer>
            <div className="container gap-7 justify-between flex md:flex-row flex-col">
                <div className='w-full flex md:w-fit md:flex-col justify-between items-center md:items-start'>
                    <div className='flex gap-4 items-center'>
                        <img src="/images/logo.png" className='h-[50px] aspect-square object-contain' />
                        <p className='text-xl'>Ai Startup kit</p>
                    </div>
                    <div className="flex text-2xl sm:text-3xl text-white/50 items-center gap-5">
                        <BsTwitterX/>
                        <RiInstagramFill/>
                        <FaYoutube/>
                    </div>
                </div>

                <div className="grid flex-1 justify-start md:justify-end grid-cols-[repeat(auto-fit,100px)] gap-16">
                    {
                        footerCols.map((col,idx) => (
                            <div key={idx}>
                                <h6 className='text-xl mb-6'>{col.title}</h6>
                                <ul className='gap-6 flex flex-col'>
                                    {
                                        col.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href} className='text-white/50 text-lg'>{link.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer