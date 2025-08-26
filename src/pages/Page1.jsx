import React from 'react'

function Page1() {
  return (
    <>
      <section className='relative flex'>
        <img src="src/assets/3615594f-min (1).jpg" alt="" className='h-[800px] w-full object-cover object-top' />
        <div className='h-[450px] w-[500px] bg-pink-600 absolute bottom-0 right-60 p-7'>
          <h1 className='text-4xl  div-head text-white'>Self-regulatory <br />body for yogha</h1>
          <p className='text-2xl pt-5 text-white'>Yoga is perfect for this! Children, <br /> parents, and even grandparents get to <br /> enjoy practicing yoga together and <br /> strengthen their bonds while.</p>
          <p className='text-2xl text-white pt-5 '>images from <a href="#">Freepik</a></p>
          <div className='h-12 w-[200px] bg-white rounded-md mt-10'>
            <p className='text-center pt-2.5 font-medium text-pink-700'> GET A FREE CLASS</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Page1