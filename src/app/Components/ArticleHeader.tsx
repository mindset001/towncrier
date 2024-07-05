import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Link from 'next/link'

function ArticleHeader() {
  return (
    <main className='w-full flex flex-col items-center mb-6 border-b border-[#676767] '>
        <div className='w-[90%] flex flex-row items-center justify-between'>
            <Image src={Logo} alt='' className='w-[98px] h-[45px]'/>
            <div className='flex items-center'>
                        <ul className='flex flex-row gap-3 text-[8px] lg:text-[14px] font-[300] mt-0 md:mt-0 items-center'>
                            {Navcontent.map((item, i: number) => (
                                <li className='lg:hover:underline' key={i}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                            <button className='border rounded-[5px] p-[4px]'>
                                Login
                            </button>
                            <button className='bg-[black] text-white rounded-[5px] p-[4px]'>
                               Subscribe
                            </button>

                        </ul>

                    </div>
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