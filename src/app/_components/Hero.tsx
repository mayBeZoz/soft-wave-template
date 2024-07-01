'use client'


const TextSection = () => {
    return (
        <div className="w-fit text-center mx-auto">
            <div className="relative z-10">
                <div className="font-semibold text-6xl sm:text-7xl md:text-8xl">
                    <h3>Boost your</h3>
                    <h3 className='from-white sm:-mt-3 bg-clip-text text-transparent leading-[70px] sm:leading-[90px] md:leading-[135px] to-light-purple bg-gradient-to-b'>rankings with AI.</h3>
                </div>
                <div className="text-sm sm:text-xl mt-4">
                    <p>Elevate your site’s visibility effortlessly with AI, where</p>
                    <p>smart technology meets user-friendly SEO tools.</p>
                </div>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <section>
            <div className="container relative mt-[160px]">
                <span className="absolute blur-[170px] top-[100px] bg-gradient-to-b from-light-purple/50 to-dark-purple block w-1/2 aspect-square -translate-x-1/2 left-1/2 "/>
                <div className="relative z-10">
                    <TextSection/>

                    <div className="w-full shadow-[0_-50px_100px] shadow-dark-purple/60 mt-20">
                        <img 
                            src="/images/panel.png" 
                            alt="hero-img" 
                            className='w-full rounded-lg h-full object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero