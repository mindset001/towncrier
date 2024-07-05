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
        <main className='w-full flex flex-col items-start lg:items-center px-4 lg:px-10 mb-8'>
            <div className='w-full border-t border-1 border-[#000] mt-10'>
               <div className='border-b flex flex-col items-left lg:items-center'>
                    <h2 className='text-[32px] font-800] my-4'>Love TownCrier? Tell your friends!</h2>
                    <p className='mb-8'>Send them your referral link below to get TownCrier swag!</p>
                    <Link href='' className='mb-10 text-[#0F68EE] text-[18px] font-[400] hover:underline'>https://refer.tldr.tech/e696b020gtd/</Link>

                    <Link href='' className='mb-4 text-[#2B2BF6] text-[18px] hover:underline'>Track your referrals here.</Link>

                    <p className='mb-6 text-[#111827] text-[18px]'>If you have any comments or feedback, just respond to this email!</p>

                    <p className='text-[#111827] text-[18px]'>Thanks For Reading</p>
                    <p className='mb-4 text-[18px] '>Hakeem & Zubair</p>

               </div>

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
                    <p className='font-[500] text-[18px] text-[#6B7280]'>Been forwarded this newsletter? <span className='text-[#93CAF5]'><a href="">Sign up for free</a></span></p>
                    <p className='font-[500] text-[18px] text-[#6B7280]'>    Enjoying TownCrier? <span className='text-[#93CAF5]'> <a href="">Click to share</a></span></p>
                    <p className='font-[500] text-[18px]' > <span>{`${year} TownCrier. `}</span> </p>
                    <p className='font-[500] text-[18px]'>Pi Digital Limited</p>
                    <p className='font-[500] text-[18px]'>16 Bello Yusuf Street, Jabi,Abuja 900211.</p>
                </div>
            
                <div>
                    <p className='block font-[500] text-[18px] text-center mt-8 text-[#6B7280]'>If you don't want to receive future editions of TownCrier, <span className='text-[#93CAF5]'>Please unsubscribe</span></p>
                </div>
            </div>
        </main>
    )
}

export default Footer

