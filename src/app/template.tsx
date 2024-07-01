"use client"
import MenuProvider from '@/contexts/MenuContext'
import React from 'react'
import Menu from './_layout/Menu'
import ReactLenis from '@studio-freight/react-lenis'

function RootTemplate({children}:Children) {
    return (
        <>
            <ReactLenis root>
                <MenuProvider>
                    {children}
                    <Menu/>
                </MenuProvider>
            </ReactLenis>
        </>
    )
}

export default RootTemplate