import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='bg-cyan-100 w-full h-20 flex justify-between'>
        <div>
          <h1 className=' logo-txt text-3xl p-5 font-bold'>logo</h1>
        </div>
        <div className='pt-5 text-2xl font-bold'>
          <Link to={"/"} className='p-10 pr-5'>Home</Link>
          <Link to={"/page1"} className='p-10 pr-5'>page1</Link>
          <Link to={"/page2"} className='p-10 pr-5'>page2</Link>
          <Link to={"/page3"} className='p-10 pr-5'>page3</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar