import Image from 'next/image'

export default function YogaComponent() {
  return (
    <div className='container my-10 sm:my-20'>
      <div className='w-full flex flex-col gap-5 items-center justify-center'>
        <h2 className='text-center'>Your Natural of Yoga</h2>
        <p className='px-10 text-center sm:px-0 text-neutral-500'>
          Yoga is a mind and body practice with origins in ancient Indian
          philosophy
        </p>
        {/*GRID*/}
        <div className='grid sm:grid-cols-3 gap-4 sm:gap-16 mt-7'>
          <div className='flex flex-col items-center w-[202px] text-center'>
            <Image src='/flower.png' alt='flower' width={100} height={100} />
            <h3 className='font-bold text-xl'>Choose the class</h3>
            <p className='text-neutral-500 text-sm'>
              It va esser tam simplic quam Occidental in fact, it va esser
              Occidental.
            </p>
          </div>
          <div className='flex flex-col items-center w-[202px] text-center'>
            <Image src='/1.svg' alt='flower' width={100} height={100} />
            <h3 className='font-bold text-xl'>Workout Routines</h3>
            <p className='text-neutral-500 text-sm'>
              It va esser tam simplic quam Occidental A un gleso va semblar
              simplificat.
            </p>
          </div>
          <div className='flex flex-col items-center w-[202px] text-center'>
            <Image
              src='/2.svg'
              alt='flower'
              width={100}
              height={100}
              className='sm:pt-3'
            />
            <h3 className='font-bold text-xl'>Yoga challenge</h3>
            <p className='text-neutral-500 text-sm'>
              It va esser tam simplic quam Occidental in fact, it va esser
              Occidental.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
