import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import WebLogo from "../../public/logo.webp";
const Logo = () => {
  return (
    <div className='px-14 py-2 '>
    <Link href={'/'}>
        <Image className='w-11 h-11 rounded-sm' src={WebLogo} alt='Website logo'/>
    </Link>
    </div>
  )
}

export default Logo;