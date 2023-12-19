import Image from 'next/image'
import { IoMdFlash } from 'react-icons/io'

export default function YogaCenter() {
  return (
    <div className='bg-neutral-100 pt-10 sm:pt-0 sm:my-10 w-full'>
      <div className='flex sm:flex-row flex-col justify-center items-center gap-10 sm:container sm:px-20'>
        {/* LEFT */}
        <div className='text-center sm:text-start sm:w-[500px]'>
          <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
            The Best Class for your Yoga Center
          </h2>
          <p className='sm:w-[460px] text-sm leading-6 px-10 sm:px-0'>
            At solmen li esser necessi uniform grammatica, pronunciation sommun
            paroles, quande li coalingue simplic regulari quam coalescent
            lingues.
          </p>
          <div className='space-y-5 mt-5 w-[300px] sm:w-full mx-auto text-start'>
            <p className='text-sm inline-flex items-center'>
              <IoMdFlash fill='#ff63d7' />
              Vivamus semper odio in nibh ultricies
            </p>
            <p className='text-sm inline-flex items-center'>
              <IoMdFlash fill='#ff63d7' />
              Duis rhoncus lectus at velit hendrerit quis
            </p>
            <p className='text-sm inline-flex items-center'>
              <IoMdFlash fill='#ff63d7' />
              Nam gravida magna vitae ante dignissim
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <Image
          src='/the-best-class-yoga.jpg'
          alt='yoga'
          width={500}
          height={500}
          quality={100}
          className='object-cover h-[362px] w-[44rem]'
          sizes='(min-width: 1540px) 704px, (min-width: 1280px) 620px, (min-width: 780px) 543px, (min-width: 640px) 480px, 100vw'
        />
      </div>
    </div>
  )
}

//
