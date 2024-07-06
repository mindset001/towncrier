'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Link from 'next/link'
import Menu from '../../../public/assets/menu.png'

function ArticleHeader() {
    const [show, setShow] = useState(true)
    const [hide, setHide] = useState(false)

    const handleShow = ()=> {
        setHide(true)
        setShow(hide)
    }

    const handleHide = () => {
        setShow(true)
        setHide(false)
    }
  return (
    <main className='w-full flex flex-col items-center mb-6 border-b border-[#676767] '>
        <div className='hidden w-[90%] lg:flex flex-row items-center justify-between'>
            <Link href='/'><Image src={Logo} alt='' className='w-[98px] h-[45px]'/></Link>
            <div className='flex items-center'>
                        <ul className='flex flex-row gap-3 text-[8px] lg:text-[14px] font-[300] mt-0 md:mt-0 items-center'>
                            {Navcontent.map((item, i: number) => (
                                <li className='lg:hover:underline' key={i}><Link href={item.link}>{item.name}</Link></li>
                            ))}


                        </ul>
                        

                    </div>
                    <div className='flex gap-10'>
                            
                        <button className='border rounded-[5px] p-[4px]'>
                                Login
                            </button>
                            <button className='bg-[black] text-white rounded-[5px] p-[4px]'>
                               Subscribe
                            </button>
                        </div>
        </div>

         {/* mobile view  */}
         <div className='w-full flex items-center justify-between lg:hidden'>
         <div>
         <Link href='/'><Image src={Logo} alt='' className='w-[98px] h-[45px]'/></Link>
        </div>

        <div>
        {show && <div className='w-full flex items-end' onClick={handleShow}>
                {/* <Image src={Menu} alt='' className='w-[38px] h-[38px]'/> */}
                <div className='mr-2'>
                <div className='w-[10px] h-[2px] bg-[#000]'></div>
                <div className='w-[10px] h-[2px] bg-[#000] my-[2px]'></div>
                <div className='w-[10px] h-[2px] bg-[#000]'></div>
                </div>
            </div>}
            {hide && <div onClick={handleHide} className='mr-2'>
            <h1 className='text-right font-[800] text-[24px] text-[black]'>X</h1>
            </div>}
        </div>
        </div>
        

        <div className='flex '>
            

            {hide && <div className=' mb-4'>
                        <ul className='grid grid-cols-2 gap-3 text-[12px]  font-[300] mt-0 md:mt-0 items-left'>
                            {Navcontent.map((item, i: number) => (
                                <li className='lg:hover:underline' key={i}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                            

                        </ul>

                        <div className='flex gap-10 mt-4'>
                        <button className='border rounded-[5px] p-[4px]'>
                                Login
                            </button>
                            <button className='bg-[black] text-white rounded-[5px] p-[4px]'>
                               Subscribe
                            </button>
                        </div>

                    </div>}
        </div>
    </main>
  )
}

export default ArticleHeader

const Navcontent = [
   
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '',
        name: 'Latest News'
    },
    {
        link: '',
        name: 'Advertise with us'
    },
    {
        link: '',
        name: 'Privacy + T&Cs'
    },
    {
        link: '',
        name: 'FAQs'
    },
    {
        link: '',
        name: 'Contact'
    },



]