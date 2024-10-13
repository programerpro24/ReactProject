import {motion} from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.3' className='w-full h-[50vh] py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat : Infinity, duration:5}} className='text-[25vh] leading-none  font-semibold uppercase pt-5 pb-5 pr-20'>We are ochi </motion.h1>
            <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat : Infinity, duration:5}} className='text-[25vh] leading-none font-semibold uppercase pt-5 pb-5 pr-20'>We are ochi</motion.h1>
           
        </div>
    </div>
  )
}

export default Marquee