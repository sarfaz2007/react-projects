import React from 'react'

const Home = () => {
  return (
    <>
      <section className='h-[700px] w-[100%] flex relative'>
        <div className='bg-blue-400 h-[700px] w-1/2'></div>
        <div className='bg-green-400 h-[700px] w-1/2'></div>
        <div className='w-full h-full flex-1 absolute flex justify-center items-center'>
          <div className='h-[500px] flex'>
            <img src="src/assets/5313.jpg" alt="" />
            <p className='bg-amber-500'>#HIKING</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home