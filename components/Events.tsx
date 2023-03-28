import React from 'react'
import Image from 'next/image'
import BCA from '../public/BCA.jpg'

export default function Events() {
  return (
    <div className="bg-[#f5eddd] px-0 pb-16 w-full overflow-hidden">
    
        <h2 className="text-center text-8xl text-gray-800 font-bold"> Events </h2>

        <div className=" xl:flex-row flex flex-col xl:pt-16 pt-6"> {/** each event */}
          <div className="px-6 xl:pr-32 flex flex-col xl:gap-y-3 gap-y-6"> 
            <div className="xl:ml-[20rem] xl:pt-4 xl:text-left text-center items-center text-gray-800 text-5xl xl:font-bold font-medium">October: Breast Cancer Awareness Tie-Dying</div>
            <div className="xl:ml-[20rem] xl:pt-4 xl:text-left text-center items-center text-gray-700 text-lg"> Angel's network tie-dyes shirts. All proceceds are donated to breat cancer research. Also alex sucks. Also alex sucks. Also alex sucks. Also alex sucks. Also alex sucks.  </div>
          </div>
          <div className=" xl:pr-64 xl:mr-16 xl:ml-0 xl:pt-0 pt-6 mx-auto">
            <div className="bg-gradient-to-r from-pink-300 via-red-300 to-purple-400 rounded-3xl h-[23rem] w-[30rem] xl:h-[33rem] xl:w-[43rem] bg-gradient-to-br">
              <div className="xl:p-6 p-4"><Image src={BCA} className="grow shrink basis-0 rounded-3xl object-fill"></Image></div>
            </div>
          </div>
        </div>    
    
    </div>
  )
}
