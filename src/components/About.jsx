import React from 'react'

const About = () => {
  return (
    <div className=' w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black pl-5'>
        <h1 className='text-4xl leading-[6vh] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full pt-10 border-t-[1px] border-[#a1b562] mt-10 flex gap-5'>
          <div className='w-1/2'>
          <h1 className='text-7xl'>Our approach : </h1>
          <button className=' bg-zinc-900 flex gap-10 items-center mt-3 uppercase rounded-full text-white py-4 px-7'>Read More
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
          </button>
          </div>
          <div className='w-1/2 h-[60vh] rounded-3xl'>
          <div className='w-full h-full rounded-3xl bg-cover bg-[url("https://media.licdn.com/dms/image/v2/D4D22AQGrvGh_6H2a4g/feedshare-shrink_800/feedshare-shrink_800/0/1715678856103?e=2147483647&v=beta&t=edEPcFVBqDr7tLlPTxLPB2332EBoPY90dzOCuMjQO5Q")]'></div>
          </div>
        </div>

    </div>
  )
}

export default About