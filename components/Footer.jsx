import { FaFacebookF } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-[#ff63d7] w-full py-10 mb-20 sm:mb-0'>
      <div className='w-1/2 mx-auto flex flex-col gap-5 sm:gap-0 sm:flex-row items-center justify-between'>
        <p className='text-white text-sm text-center'>
          © 2045 All Rights Reserved. Created by Web Domus Italia
        </p>
        <div className='flex items-center'>
          <FaFacebookF className='text-white mr-2' />
          <FaTwitter className='text-white mr-2' />
          <FaGooglePlusG className='text-white mr-2' />
          <FaLinkedinIn className='text-white mr-2' />
        </div>
      </div>
    </div>
  )
}
