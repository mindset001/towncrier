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
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-4'>
                    <p className=' text-[#000000] font-[400] text-[14px]' > <span>{`${year} TownCrier. All right reserved.`}</span> </p>
                    <div className=''>
                        <ul className='flex flex-row gap-3  text-[14px] font-[400] mt-8 md:mt-0'>
                            {Navcontent.map((item, i: number) => (
                                <li className='underline'><Link href={item.link}>{item.name}</Link></li>
                            ))}



                        </ul>



                    </div>
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

                <div className='hidden md:flex flex-col items-center gap-2'>
                    <p className='font-[500] text-[18px] text-[#6B7280]'>Been forwarded this newsletter? <span className='text-[#93CAF5]'><a href="">Sign up for free</a></span></p>
                    <p className='font-[500] text-[18px] text-[#6B7280]'>    Enjoying TownCrier? <span className='text-[#93CAF5]'> <a href="">Click to share</a></span></p>
                    <p className='font-[500] text-[18px]' > <span>{`${year} TownCrier. `}</span> </p>
                    <p className='font-[500] text-[18px]'>Pi Digital Limited</p>
                    <p className='font-[500] text-[18px]'>16 Bello Yusuf Street, Jabi,Abuja 900211.</p>
                </div>
            
                <div>
                    <p className='hidden md:block font-[500] text-[18px] text-center mt-8 text-[#6B7280]'>If you don't want to receive future editions of TownCrier, <span className='text-[#93CAF5]'>Please unsubscribe</span></p>
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