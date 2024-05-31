'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Face from '../../../public/assets/Facebook.png'
import Twit from '../../../public/assets/devicon_twitter.png'
import Inst from '../../../public/assets/Instagram.png'
import Linked from '../../../public/assets/dashicons_linkedin.png'


function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
    return (
        <main className='w-full bg-[#F3F4F6] flex flex-col items-start lg:items-center px-4 lg:px-10 mb-10'>
            <div className='w-full'>
               

               <div className='flex flex-col items-center'>
               <div className='my-10 flex flex-row gap-[60px]'>
                            <Link href=''>
                                <Image src={Face} alt='' className='w-[34px] h-[34px]'/>
                            </Link>
                            <Link href=''>
                                <Image src={Twit} alt='' className='w-[34px] h-[34px]'/>
                            </Link>
                            <Link href=''>
                                <Image src={Inst} alt='' className='w-[34px] h-[34px]'/>
                            </Link>
                            <Link href=''>
                                <Image src={Linked} alt='' className='w-[34px] h-[34px]'/>
                            </Link>

                </div>
               </div>

                <div className='flex flex-col items-center gap-2'>
                    <p className='font-[500] text-[13px] md:text-[18px] text-[#6B7280]'>Been forwarded this newsletter? <span className='text-[#93CAF5]'><a href="">Sign up for free</a></span></p>
                    <p className='font-[500] text-[13px] md:text-[18px] text-[#6B7280]'>    Enjoying TownCrier? <span className='text-[#93CAF5]'> <a href="">Click to share</a></span></p>
                    <p className='font-[500] text-[13px] md:text-[18px]' > <span>{`${year} TownCrier. `}</span> </p>
                    <p className='font-[500] text-[13px] md:text-[18px]'>Asteria Alliance Limted</p>
                    <p className='font-[500] text-[13px] md:text-[18px]'>16 Bello Yusuf Street, Jabi,Abuja 900211.</p>
                </div>
            
                <div>
                    <p className='block font-[500] text-[13px] md:text-[18px] text-center my-8 text-[#6B7280]'>If you don't want to receive future editions of TownCrier, <span className='text-[#93CAF5]'>Please unsubscribe</span></p>
                </div>
            </div>
        </main>
    )
}

export default Footer

const Navcontent = [
    {
        link: '',
        name: 'Privacy Policy'
    },
    {
        link: '',
        name: 'Terms of Service'
    },
    {
        link: '',
        name: 'Cookies Sttings'
    },



]