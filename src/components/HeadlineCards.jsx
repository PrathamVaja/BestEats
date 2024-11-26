import React from 'react'

const HeadlineCards = (props  ) => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 '>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*overlay*/}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>{props.name}</p>
                <p className='px-2'>{props.through}</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img  className='max-h-[160px] sm:w-[500px]  md:max-h-[200px]   object-cover rounded-xl' src={props.src} alt="" />

        </div>
    </div>
  )
}

export default HeadlineCards
