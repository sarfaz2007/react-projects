import React from 'react'

function Page3() {
  return (
    <>
      <section className='relative'>
        <img src="src/assets/dss-min.jpg" alt="" className='w-full h-[800px] object-cover' />
        <div className='absolute top-64    left-[600px] text-center text-white'>
          <p className='text-9xl font-bold '>404</p>
          <p className='text-3xl font-semibold pt-4'>SORRY PAGE NOT FOUND</p>
          <p className='text-3xl pt-7'>The page you are looking for was moved, <br />removed, renamed or might never existed
          </p>
          <div className='border-2 h-14 w-48 items-center mt-7 ml-40'>
            <p className='font-semibold p-3 font-stretch-50%'>GO TO <a href="/">HOMEPAGE</a></p>
          </div>
        </div>
      </section>
    </>

  )
}

export default Page3