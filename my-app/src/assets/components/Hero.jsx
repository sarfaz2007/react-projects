import { ReactTyped } from "react-typed"


export const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALALYTICS</p>
        <h1 className='md:text-5xl sm:text-5xl text-4xl font-bold md:py-4'>Grow with data</h1>
        <div className="flex justify-center items-center w-full">
          <p className='md:text-xl sm:text-xl text-sm font-bold'>Fast, flexible financing for

          </p>
          <ReactTyped
          className="md:text-2xl sm:text-4xl text-2xl font-bold pl-2 max-w-[50px] text-white"
            strings={[
              "BTB",
              "BTC",
              "SASS",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input type="text" />
          </ReactTyped>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">monitor your data analytics to increase revenue for BTB,BTC, & SASS platforms.</p>
        <button className="bg-[#00df9a] w-[200px] h-[50px] rounded-md font-medium my-6 mx-auto p]y-3 text-black">Get started </button>
      </div>
    </div>
  )
}
