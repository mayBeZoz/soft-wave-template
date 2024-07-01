
type GlowButtonProps = {
    tw_bg_color?:string,
}& Children
function GlowButton({tw_bg_color,children}:GlowButtonProps) {
    return (
        <div 
        className={`w-fit rounded-xl text-white backdrop-blur-md overflow-hidden shadow-[inset_0_0_13px_2px] shadow-white/60 h-fit`}>
            <button
                className={`w-fit ${tw_bg_color || 'bg-white/50'}  rounded-xl sm:text-lg h-fit px-5 py-2 capitalize border-2 border-white/30`}
            >{children}</button>
        </div>
    )
}

export default GlowButton