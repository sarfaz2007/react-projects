import React from 'react'

function Page2() {
  return (
    <>
      <section className='h-[700px] relative flex'>
        <div className='bg-cyan-300 w-1/2 h-full'></div>
        <div className='h-[700px] w-1/2 bg-blue-200'></div>
        <div className='absolute max-w-[75%] grid-cols-3 top-20 flex gap-6 ml-72'>
          <div >
            <img src="src/assets/12178.jpg" alt="" className='w-[380px] h-[550px] object-cover' />
          </div>
          <div>
            <img src="src/assets/dsd.jpg" alt="" className='w-[380px] h-[550px] object-cover' />
          </div>
          <div className='p-5 w-[380px] h-[550px] content-end pl-28 bg-white'>
            <p className='text-2xl right-0'>We are waiting for you.</p>
            <p className='text-4xl pl-16'>Contact us.</p>
            <p className='pt-3.5 pl-20'>(541) 323-6101 <br />(541) 323-6102 <br />115 NW Oregon Ave, 7 <br />
              Bend, OR 97703</p>
              <p className='pt-3.5 pl-20'>images from <a href="#" className='text-cyan-400'>Freepik </a></p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Page2