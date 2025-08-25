import React from 'react'

const Home = () => {
  return (
    <>
      <section className='h-[700px] w-[100%] flex relative'>
        <div className='bg-cyan-300 h-[700px] w-1/2'></div>
        <div className='h-[700px] w-1/2'></div>
        <div className='w-full h-full flex-1 absolute flex justify-center items-center'>
          <div className='h-[550px] flex mx-auto justify-center'>
            <img src="src/assets/5313.jpg" alt="" />
            <div className='bg-zinc-700 p-10 w-[400px]'>
              <p className='text-6xl text-blue-100 pt-11 pl-10'>#HIKING</p>
              <p className='text-cyan-400 pt-10 pl-24'>________</p>
              <p className='text-gray-500 text-2xl pt-8'>After a days walk, everything  <br /> twice its usual value. <br />
                Image from <a href="#">Freepik</a></p>
              <div className='h-16 w-48 bg-cyan-400 mx-auto mt-12'>
                <p className='text-center pt-3.5 text-2xl font-bold mt-5'>contact us</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home