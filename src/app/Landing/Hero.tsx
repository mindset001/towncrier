import React from 'react'

function Hero() {
  return (
    <main className='bg-[#D0E2FE] w-full flex flex-col items-center justify-center py-10 border-t border-1'>
        <div className='w-[95%] lg:w-[75%] flex flex-col items-center justify-center text-center'>
            <h1 className='text-[22px]  lg:text-[50px] 2xl:text-[66px] font-[700] lg:leading-[67.2px]'>Discover the newsletter that will <br />spark your imagination and fuel <br /> your purpose. </h1>
            <p className='text-[16px] lg:text-[18px] 2xl:text-[20px] font-[400] mt-10'>Don’t miss out on the conversations that matter. Subscribe today and unleash your ability to <br />drive meaningful impact. The next big idea is waiting for you in TownCrier.</p>
            
        </div>

        <div className='w-[95%] md:w-[75%] flex flex-col items-center justify-center'>
            <div className='w-full lg:w-[50%] my-6 flex flex-col items-center justify-center md:flex-row gap-2'>
                <input type="text" placeholder='Enter your email' className='p-4 h-[48px] rounded-[5px] border border-1 lg:w-[378px] w-full'/>
                <button className='bg-[#000] rounded-[5px] text-[#fff] px-4 h-[48px]  md:w-[119px] w-full md:ml-5'>Subscribe</button>
            </div>
            <p className='text-[12px] font-[400] 2xl:text-[20px] px-2'>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
        </div>
    </main>
  )
}

export default Hero