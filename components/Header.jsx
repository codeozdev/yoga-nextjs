import Image from 'next/image'

import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

export default function Header() {
  return (
    <div className='relative h-96 w-full'>
      <Image src='/yoga-header.jpg' alt='yoga' fill className='object-cover' />
      <div className='absolute inset-0 w-full h-full bg-black opacity-40'></div>
      <div className='absolute text-neutral-50 w-full pt-5 h-full'>
        {/*YOGA CENTER*/}
        <div className='flex sm:flex-row flex-col items-center justify-between gap-5 sm:gap-10 container font-medium'>
          <div className='flex items-center gap-2'>
            <MdOutlineEmail size={20} />
            info@domain.net
          </div>
          <div>
            <Image
              src='/logo1.png'
              alt='logo'
              width={100}
              height={100}
              className='pointer-events-none select-none'
            />
          </div>
          <div className='flex items-center gap-2'>
            <FiPhone size={20} />
            +00.1234.567891
          </div>
        </div>
        {/*H1 TEXT*/}
        <div className='flex flex-col justify-center items-center h-1/2 sm:h-4/5 text-white space-y-4'>
          <h1 className='text-lg sm:text-5xl text-center'>
            Be peaceful in mind and healthy in Body!
          </h1>
          <h3 className='text-xs px-10 sm:px-0 sm:text-lg text-neutral-300 text-center'>
            At solmen va esser necessi fa uniform grammatica, pronunciation plu
            sommun paroles.
          </h3>
          <button className='bg-pink-400 px-5 py-3 rounded-lg text-2xl hover:bg-pink-600'>
            JOIN US NOW
          </button>
        </div>
      </div>
    </div>
  )
}
