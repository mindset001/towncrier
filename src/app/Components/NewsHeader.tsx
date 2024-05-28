import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Link from 'next/link'

function NewsHeader() {
  return (
    <main className='w-full flex flex-col items-center mb-10 border-b border-[#000] lg:border-none'>
        <div className='flex flex-col items-center'>
            <Image src={Logo} alt='' className='w-[336.76px] h-[93.54px]'/>
            <div className=''>
                        <ul className='flex flex-row gap-3 text-[14px] lg:text-[19.09px] font-[300] mt-0 md:mt-0'>
                            {Navcontent.map((item, i: number) => (
                                <li className='lg:underline'><Link href={item.link}>{item.name}</Link></li>
                            ))}

                        </ul>

                    </div>
        </div>
    </main>
  )
}

export default NewsHeader

const Navcontent = [
    {
        link: '',
        name: 'Subscribe'
    },
    {
        link: '',
        name: 'View Online'
    },
    {
        link: '',
        name: 'Preference Center'
    },



]