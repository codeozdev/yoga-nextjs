import Image from 'next/image'

export default function YogaClasses() {
  return (
    <div className='flex flex-col items-center justify-center  bg-[#fdfdfd] py-10 text-center'>
      <div>
        <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
          Our Yoga Classes
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
              src='/kundalini-yoga.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Kundalini Yoga</h3>
          <p className='w-[250px]'>
            Li Europan lingues membres del sam familie.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/basic-yoga.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Basic Yoga</h3>
          <p className='w-[250px]'>
            Li Europan lingues membres del sam familie.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/iyengar-yoga.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Iyengar Yoga</h3>
          <p className='w-[250px]'>
            Li Europan lingues membres del sam familie.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[145px] h-[145px]'>
            <Image
              src='/advanced-yoga-poses.jpg'
              alt='yoga classes'
              fill
              className='object-cover rounded-full'
            />
          </div>
          <h3 className='text-lg font-semibold mt-4'>Advanced Yoga</h3>
          <p className='w-[250px]'>
            Li Europan lingues membres del sam familie.
          </p>
        </div>
      </div>
    </div>
  )
}
