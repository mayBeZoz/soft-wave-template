import React from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'

function Cards() {
    const smCard1 = {
        description:'Helps you set and achieve SEO goals with guided assistance.',
        title:"SEO goal setting",
        imgURL:'/images/cards/small1.png'
    }
    const bigCard1 = {
        description:'Perform complex SEO audits and optimizations with a single click.',
        title:"User-friendly dashboard",
        imgURL:'/images/cards/big1.png'
    }
    const smCard2 = {
        description:'Automatic suggestions and the best keywords to target.',
        title:"Smart Keyword Generator",
        imgURL:'/images/cards/small2.png'
    }
    const bigCard2 = {
        description:'Visual insights into your site’s performance.',
        title:"Visual reports",
        imgURL:'/images/cards/big2.png'
    }

    const headingText = "Harness the power of AI, making search engine optimization intuitive and effective for all skill levels."
    return (
        <section className='mt-40 mb-20'>
            <div className="container">
                <h4 className='text-3xl mb-8 mx-auto sm:text-[2.15em] sm:w-[550px] w-full text-center'>{headingText}</h4>

                <div className="flex gap-y-10 w-full justify-between flex-wrap">
                    <SmallCard {...smCard1}/>
                    <BigCard {...bigCard1}/>
                    <BigCard {...bigCard2}/>
                    <SmallCard {...smCard2}/>
                </div>
            </div>
            
        </section>
    )
}

export default Cards