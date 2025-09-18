import { ReactTyped } from "react-typed"


export const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALALYTICS</p>
        <h1 className='md:text-7xl sm:text-7xl text-4xl font-bold md:py-6'>Grow with data</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl'>Fast, flexible financing for

          </p>
          <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold content-center"
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
      </div>
    </div>
  )
}
