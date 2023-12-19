import Image from 'next/image'

export default function AdvantagesMobil() {
  return (
    <div className='bg-[#666666] text-center pt-10'>
      <div>
        <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
          The Best Class for your Yoga Center
        </h2>
        <p className='text-sm text-white'>
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
          className='object-cover w-full h-[750px]'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />

        <div className='absolute inset-0 w-full h-full bg-black opacity-60' />

        <div className='absolute top-[2rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/mind-soul.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover'
            />
            <h3 className='text-[#ff63d7]'>Mind and soul</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute top-[10rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/1.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover'
            />
            <h3 className='text-[#ff63d7]'>Good for health</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute top-[18rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/2.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover'
            />
            <h3 className='text-[#ff63d7]'>Relaxation and Refresh</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute top-[25rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/3.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover'
            />
            <h3 className='text-[#ff63d7]'>Yoga for real energy</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute top-[33rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/4.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover'
            />
            <h3 className='text-[#ff63d7]'>Renewing your mind</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
        <div className='absolute top-[39rem] left-[%30] w-full'>
          <div className='flex flex-col justify-center items-center text-center w-[300px] mx-auto'>
            <Image
              src='/2.png'
              alt='shape'
              width={40}
              height={40}
              className='object-cover rotate-45'
            />
            <h3 className='text-[#ff63d7]'>Meditation classes</h3>
            <p className='text-white text-sm'>
              A un Angleso semblar un simplificat Angles, quam un skepticbridge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
