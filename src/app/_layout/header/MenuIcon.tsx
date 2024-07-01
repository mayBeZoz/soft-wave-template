'use client'

import { useMenuProvider } from "@/contexts/MenuContext"

export default function MenuIcon () {
    const menuData = useMenuProvider()
    return (
        <div onClick={menuData?.toggleShowMenu} className="lg:hidden h-[20px] w-[30px] cursor-pointer flex justify-between flex-col">
            <div className="w-full h-[2px] bg-white"/>
            <div className="w-full h-[2px] bg-white"/>
            <div className="w-full h-[2px] bg-white"/>
        </div>
    )
}