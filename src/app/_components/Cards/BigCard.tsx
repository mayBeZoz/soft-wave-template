
type BigCardProps = {
    imgURL:string,
    title: string,
    description: string,
}
function BigCard({description,imgURL,title}:BigCardProps) {
    return (
        <div className=' h-[400px] pb-[30px] flex items-end relative w-full md:w-[calc(((100%/3)*2)-20px)] overflow-hidden  rounded-lg p-5'>
            <div className="absolute z-10 left-10 top-0 w-full h-full">
                <img 
                    src={imgURL} 
                    alt="big image"
                    className='w-full h-full object-cover object-left '
                />
            </div>
            <span className="absolute bg-purple-bottom-gradient h-full w-full top-0 left-0"/>

            <div className="relative text-lg z-20">
                <h6 className='mb-3'>{title}</h6>
                <p className='text-white/70 w-[260px]'>{description}</p>
            </div>
        </div>
    )
}

export default BigCard