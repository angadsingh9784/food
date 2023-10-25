import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* {cards} */}
            <div className='rounded-xl relative'>
                {/* {overlay} */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1585601356536-270d51fe07a7?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>

            {/* {cards} */}
            <div className='rounded-xl relative'>
                {/* {overlay} */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurant</p>
                    <p className='px-2'>Added daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://plus.unsplash.com/premium_photo-1670604211960-82b8d84f6aea?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>

            {/* {cards} */}
            <div className='rounded-xl relative'>
                {/* {overlay} */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We deliver Deserts too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1543773495-2cd9248a5bda?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </div>
        </div>
    )
}

export default HeadlineCards
