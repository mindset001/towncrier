import React from 'react'
import Logo from '../../../public/assets/logo.png'
import Image from 'next/image'

function Header() {
  return (
    <main>
        <div className='bg-[#EAF2FE] border-b border-1 border-[#000]'>
        <Image src={Logo} alt='' className='w-[141px] h-[41px]'/>
        </div>
    </main>
  )
}

export default Header