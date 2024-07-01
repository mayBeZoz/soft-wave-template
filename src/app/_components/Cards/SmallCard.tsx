
type SmallCardProps = {
    imgURL:string,
    title: string,
    description: string,
}
function SmallCard({description,imgURL,title}:SmallCardProps) {
    return (
        <div className='pb-[30px] flex flex-col justify-between h-[400px] w-full md:w-1/3 rounded-lg border border-zinc-800 p-5'>
            <img 
                src={imgURL} 
                alt="small image"
                className='w-[270px] h-[200px] mx-auto object-contain'
            />

            <div className="text-lg">
                <h6 className=' mb-3'>{title}</h6>
                <p className='text-white/70 w-[260px]'>{description}</p>
            </div>

        </div>
    )
}

export default SmallCard