import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 px-32 items-center '>
        <div className="cardcontainer h-96 w-1/2">
        <div className=" relative card rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center">
           <h1 className='text-2xl text-[#CDEA68] font-semibold'>ochi</h1>
           <button className='absolute left-10 bottom-10 border-2 border-sky-500 rounded-3xl w-32'>Read More</button>
   
        </div>
        </div>
        <div className="cardcontainer h-96 w-1/2 flex gap-5">
        <div className=" relative card rounded-xl w-1/2 h-full bg-[#0e2923] flex justify-center items-center">
        <h1 className='text-2xl text-[#fff] font-semibold'>Clutch</h1>
        <button className='absolute left-10 bottom-10 border-2 border-sky-500 rounded-3xl w-32'>Read More</button>
        </div>
        <div className="relative card rounded-xl w-1/2 h-full bg-[#0e2923] flex justify-center items-center">
        <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_KNKKNCsRqnERegWBuXpjbjcIXG19SHn7fyP1Dx0dssT_tfEY" alt="" />
        <button className='absolute left-10 bottom-10 border-2 border-sky-500 rounded-3xl w-32'>Read More</button>
        </div>
        </div>
   
    </div>
  )
}

export default Cards