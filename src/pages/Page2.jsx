import React from 'react'

function Page2() {
  return (
    <>
    <section className='h-[700px] relative flex'>
        <div className='bg-cyan-300 w-1/2 h-full'></div>
        <div className='h-[700px] w-1/2 '></div>
        <div className='absolute max-w-[70%] grid-cols-3 top-0 flex gap-5 '>
          <div >
            <img src="src/assets/12178.jpg" alt=""className='w-[500px] h-[600px] object-cover' />
          </div>
          <div>
            <img src="src/assets/dsd.jpg" alt="" className='w-[500px] h-[600px]' />
          </div>

        </div>
    </section>
    </>
  )
}

export default Page2