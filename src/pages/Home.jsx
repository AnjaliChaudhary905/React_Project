//import React from 'react'

const Home = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div class="grid grid-cols-2  ">
        <div className="py-4 px-2 relative top-58.75 left-39">
          <div>
            <span className="text-[16px] tracking-[12%] font-extralight align-middle leading-none text-[#6B788E]  ">RESTAURANT</span>
            <div className="flex items-center">
              <span className="font-bold text-[61px]">The</span>
              <div className="relative">
                <img className=" w-[190.5px] h-[76.11px] rotate-[170]" src="one.png" alt="" />
                <span className="font-bold text-white text-[61px] left-2 -top-2 absolute">#One</span>
              </div>
            </div>
            <div className="text-[61px] font-bold">Momo <span className="text-[#D95103] ">Restaurant</span></div>
            <p className="text-[20px] font-semibold flex items-baseline gap-2">More than <span className="text-[#D95103] font-bold text-[25px]"> 20+ Varieties</span>of momo available for you</p>
          </div>
        </div>
        <div className="relative">

          <img
            className="w-100 h-220 rounded-full absolute right-0 top-0 "
            src="circle.png" alt="circle" />

        </div>

      </div>
    </div>


  )
}

export default Home