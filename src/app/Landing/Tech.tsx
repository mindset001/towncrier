import React from 'react'

function Tech() {
  return (
    <main className='bg-[#D0E2FE] w-full flex flex-col items-center justify-center py-10 border-t border-1'>
        <div className='w-[95%] lg:w-[70%] flex flex-col items-center justify-center text-center'>
            <h1 className='text-[28px] lg:text-[56px] font-[700] lg:leading-[67.2px]'>Stay in the tech loop. </h1>
            <p className='text-[16px] lg:text-[20px] font-[400] mt-10'>Want to ask us something? Or perhaps share an idea or some feedback? We always love hearing from you.</p>
            
        </div>

        <div className='w-[95%] md:w-[75%] flex flex-col items-center'>
            <div className='w-full md:w-[65%] lg:w-[35%] my-6 flex items-center flex-col md:flex-row gap-2'>
            <button className='bg-[#fff] rounded-[5px] text-[#235784] px-4 h-[48px]  md:w-[157px] w-full '><a href="#hero">Subscribe Now</a></button>
                <button className='bg-[#235784] rounded-[5px] text-[#fff] px-4 h-[48px]  md:w-[157px] w-full '>Message Us</button>
            </div>
           
        </div>
    </main>
  )
}

export default Tech