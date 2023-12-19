import Image from 'next/image'

export default function Expert() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#f5f5f5] py-10 text-center'>
      <div>
        <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
          Expert Trainers
        </h2>
        <p className='text-sm w-[350px] sm:w-full'>
          At solmen li esser necessi uniform grammatica, pronunciation
        </p>
      </div>
      {/* GRID */}
      <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-10 mt-10 sm:mt-20'>
        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/fig-nelson.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
              sizes='145px'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Fig Nelson</h3>
          <p className='w-[250px]'>Trainer </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/jason-response.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
              sizes='145px'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Jason Response</h3>
          <p className='w-[250px]'>Yoga Basic</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/eric-widget.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
              sizes='145px'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Eric Widget</h3>
          <p className='w-[250px]'>Kundalm</p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/lance-begrol.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
              sizes='145px'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Lance Bogrol</h3>
          <p className='w-[250px]'>Healthy Recipes</p>
        </div>
      </div>
    </div>
  )
}
