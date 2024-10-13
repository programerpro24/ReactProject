import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
  return (

    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
    <div className="textStructure mt-40 px-20">
        {["WE CREATE", "EYE OPENING","PRESENTATION"].map((item, index)=>{
            return <div className="masker">
                <div className='w-fit flex items-center'>
                {index===1 && 
                (<motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease:[0.11, 0, 0.5, 0], duration:1}} className='w-[6vw] h-[5vw] relative top-1'>
                  <img className='h-full w-full overflow-hidden rounded' src="https://ochi.design/wp-content/uploads/2022/05/1.Discovery-194x194.png" alt="" />
                </motion.div>)}
                <h1 className='text-[7vw] leading-[6vw] tracking-tighter font-medium'>{item}</h1>
                </div>
            </div>  
        })}
    </div>
<div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-10 px-10'>
    {["For public and private companies", "From the first pitch to IPO"]. map((item, index)=>{
        return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
    })}

    <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-lg rounded-full uppercase '>Start The Project</div>
        <div className='w-10 h-10 pt-[7px] pb-2 pr-1 pl-[4px] flex items-center justify-center rounded-full border-[1px] border-zinc-500'>
        <span className='rotate-[45deg]'>
        <FaArrowUpLong />
        </span>
        </div>
    </div>
  </div>
</div>
  )
}

export default Landing