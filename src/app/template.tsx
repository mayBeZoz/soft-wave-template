"use client"
import MenuProvider from '@/contexts/MenuContext'
import React from 'react'
import Menu from './_layout/Menu'
import ReactLenis from '@studio-freight/react-lenis'
import Header from './_layout/header/Header'

function RootTemplate({children}:Children) {
    return (
        <>
            <ReactLenis root>
                <MenuProvider>
                    <Header/>

                    {children}
                    <Menu/>
                </MenuProvider>
            </ReactLenis>
        </>
    )
}

export default RootTemplate