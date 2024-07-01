"use client"
import { createContext, useContext, useState } from "react";

const Context = createContext<MenuProviderData>(undefined)


export default function MenuProvider ({children}:Children) {
    const [showMenu,setShowMenu] = useState<boolean>(false)
    const toggleShowMenu = () => setShowMenu(!showMenu)

    const data = {showMenu,toggleShowMenu}

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useMenuProvider = () => useContext(Context)

