import GlowButton from '@/components/GlowButton'
import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import MenuIcon from './MenuIcon'







function Header() {
    return (
        <header className='h-[80px] relative backdrop-blur-lg z-[100] flex items-center border-white/20 border-b w-full'>
            <div className="container px-16 gap-5 items-center flex justify-between">
                <Logo/>
                <Nav/>
                <div className="flex gap-3 sm:gap-10 items-center">
                    <GlowButton
                        tw_bg_color='bg-medium-purple/60'>
                            join waitlist
                    </GlowButton>
                    <MenuIcon/>
                </div>
            </div>
        </header>
    )
}

export default Header