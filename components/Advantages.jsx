import Image from 'next/image'

export default function Advantages() {
  return (
    <div className='flex flex-col items-center justify-center  bg-[#fdfdfd] pt-10 overflow-x-hidden'>
      <div>
        <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
          The Best Class for your Yoga Center
        </h2>
        <p className='text-sm'>
          At solmen li esser necessi uniform grammatica, pronunciation
        </p>
      </div>
      <div className='w-full relative'>
        <Image
          src='/advantages-of-yoga.jpg'
          alt='yoga'
          width={1400}
          height={500}
          quality={100}
          className='object-cover w-full sm:h-[850px] 3xl:h-[1100px]'
          sizes='100vw'
        />
        {/* LEFT */}
        <div className='absolute sm:top-[9rem] sm:left-52 3xl:top-40 3xl:left-96 w-[600px]'>
          <div className='flex flex-col items-end'>
            <Image
              src='/mind-soul.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover  w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Mind and soul</h3>
            <p className='w-[400px] text-end'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute sm:top-[19rem] sm:left-16 3xl:top-96 3xl:left-60 w-[600px]'>
          <div className='flex flex-col items-end'>
            <Image
              src='/1.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Good for health</h3>
            <p className='w-[400px] text-end'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute sm:top-[30rem] sm:-left-20 3xl:top-[36rem] 3xl:left-20 w-[600px]'>
          <div className='flex flex-col items-end'>
            <Image
              src='/2.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Relaxation and Refresh</h3>
            <p className='w-[400px] text-end'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        {/* RIGHT */}
        <div className='absolute sm:top-[9rem] sm:right-52 3xl:top-40 3xl:right-96 w-[600px]'>
          <div className='flex flex-col items-start'>
            <Image
              src='/3.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Yoga for real energy</h3>
            <p className='w-[400px] text-start'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute sm:top-[21rem] sm:right-16 3xl:top-96 3xl:right-60 w-[600px]'>
          <div className='flex flex-col items-start'>
            <Image
              src='/4.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Renewing your mind</h3>
            <p className='w-[400px] text-start'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute sm:top-[30rem] sm:-right-20 3xl:top-[36rem] 3xl:right-20 w-[600px]'>
          <div className='flex flex-col items-start'>
            <Image
              src='/2.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover rotate-45 w-auto h-auto'
            />
            <h3 className='font-medium text-lg'>Meditation classes</h3>
            <p className='w-[400px] text-start'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
