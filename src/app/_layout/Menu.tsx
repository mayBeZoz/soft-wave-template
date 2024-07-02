"use client"

import { routes } from "@/constants"
import { useMenuProvider } from "@/contexts/MenuContext"
import { AnimatePresence, motion } from "framer-motion"



export default function Menu () {
    const menuData = useMenuProvider()
    return (
        <>
            <AnimatePresence>
                {
                    menuData?.showMenu ? <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity:0}}
                        key={'menu'}
                        className="w-full h-screen flex items-center backdrop-blur-2xl z-[200] fixed top-0 left-0"
                    >
                        <div className="relative w-full">
                            <div className="container gap-10 flex flex-col justify-between items-center">
                                {
                                    routes.map((route, index) => (
                                        <motion.div
                                            key={index}
                                            className="text-white text-4xl md:text-6xl cursor-pointer capitalize"
                                            initial={{opacity:0,y:30}}
                                            animate={{opacity:1,y:0}}
                                            transition={{
                                                delay:.2,
                                                ease:"easeOut",
                                                duration:.5
                                            }}
                                            onClick={menuData.toggleShowMenu}
                                        >
                                            {route}
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div> : <></>
                }
            </AnimatePresence>
        </>
    )
}