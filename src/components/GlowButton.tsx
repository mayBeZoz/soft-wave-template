
type GlowButtonProps = {
    tw_bg_color?:string,
}& Children
function GlowButton({tw_bg_color,children}:GlowButtonProps) {
    return (
        <div 
        className={`w-full rounded-xl text-white backdrop-blur-md overflow-hidden shadow-[inset_0_0_10px_5px] shadow-white/50 h-fit`}>
            <button
                className={`w-full ${tw_bg_color || 'bg-zinc-800/60'}  rounded-xl sm:text-lg h-fit px-5 py-2 capitalize border-2 border-white/30`}
            >{children}</button>
        </div>
    )
}

export default GlowButton