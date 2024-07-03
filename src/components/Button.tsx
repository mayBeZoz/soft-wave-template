import React from 'react'

type ButtonProps = {
    className?:string,
    type?:"submit"|"button"|"reset",  
} & Children
function Button({children,className,type}:ButtonProps) {
    return (
        <button 
            className={`bg-white p-3 text-lg sm:text-xl text-black rounded-lg ${className}`} 
            type={type}
        >   
            {children}
        </button>
    )
}

export default Button
