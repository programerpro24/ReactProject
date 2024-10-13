import React from 'react'

const Footer = () => {
  return (
    <div className=' flex gap-5 w-full h-screen bg-zinc-900 p-20'>
        <div className='w-1/2 flex flex-col justify-between h-full'>
        <div className='heading'>
        <h1 className='text-8xl uppercase -mb-5 font-semibold'>Eye-</h1>
        <h1 className='text-8xl uppercase -mb-5 font-semibold'>Opening</h1>
        </div>
        <h3 className='text-3xl'>ochi.</h3>
        </div>
        <div className='w-1/2'>
        <h1 className='text-7xl uppercase -mb-5 font-semibold'>presentations</h1>
        <div className='dets'>
            <a className='block text-xl font-light mt-10' href="">Facebook</a> 
            <a className='block' href="">Instagram</a> 
            <a className='block' href="">Twite</a>
        </div>
     
        </div>
    </div>
  )
}

export default Footer