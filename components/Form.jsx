export default function Form() {
  return (
    <div className='flex items-center justify-center bg-[#fdfdfd] py-10 text-center'>
      <div>
        <h2 className='text-[#ff63d7] text-xl sm:text-2xl mb-2'>
          FORM & TIME SCHEDULE
        </h2>
        <p className='text-sm w-[350px] mx-auto'>
          At solmen li esser necessi uniform grammatica, pronunciation
        </p>
        {/* 2 GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center mt-10 sm:mt-14'>
          <div className='border p-4 py-8 sm:p-8 sm:py-12 border-gray-500 rounded text-xs sm:w-[450px]'>
            <h4 className='font-bold text-2xl text-[#ff63d7] pb-3'>
              Make An Appiontment
            </h4>
            <p className='text-sm w-[350px] sm:w-full'>
              At solmen va esser necessi far uniform grammatica, pronunciation e
              plu sommun paroles.
            </p>
            <div className='grid grid-cols-2 gap-3 mt-8'>
              <input
                type='text'
                className='border placeholder:text-xs px-2 py-1 outline-0 rounded text-xs'
                placeholder='Full name'
              />
              <input
                type='text'
                className='border placeholder:text-xs px-2 py-1 outline-0 rounded text-xs'
                placeholder='Phone number'
              />
              <input
                type='text'
                className='border placeholder:text-xs px-2 py-1 outline-0 rounded text-xs'
                placeholder='Email'
              />

              <input
                type='date'
                className='border placeholder:text-xs px-2 py-1 outline-0 rounded text-xs text-gray-400'
              />

              <textarea
                name=''
                id=''
                rows='10'
                className='border resize-none col-span-2 rounded text-xs placeholder:text-xs px-2 py-2 outline-0'
                placeholder='Message (Optional)'
              />
              <button
                type='submit'
                className='bg-[#ff63d7] text-white font-bold col-span-2 p-4 sm:text-base rounded'>
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-10'>
            <div className='space-y-5'>
              <h4 className='text-[#ff63d7] text-2xl'>Weekdays</h4>
              <p className='font-bold'>06.00 AM - 07.00 AM</p>
              <p className='text-sm w-[350px] sm:w-full'>
                kundalini meditation beginners for Yoga
              </p>
              <p className='font-bold'>07.00 AM - 08.30 AM</p>
              <p className='text-sm w-[350px] sm:w-full'>
                Surya Namaskar & Advanced Meditation
              </p>
            </div>

            <div className='space-y-5'>
              <h4 className='text-[#ff63d7] text-2xl'>Weekdays</h4>
              <p className='font-bold'>06.00 AM - 07.00 AM</p>
              <p className='text-sm w-[350px] sm:w-full'>
                kundalini meditation beginners for Yoga
              </p>
              <p className='font-bold'>07.00 AM - 08.30 AM</p>
              <p className='text-sm w-[350px] sm:w-full'>
                Surya Namaskar & Advanced Meditation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
