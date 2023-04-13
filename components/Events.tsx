import React from 'react'
import Image from 'next/image'
import BCA from '../public/BCA.jpg'

export default function Events() {
  return (
    <div className="bg-[#f5eddd] px-0 pb-16 w-full overflow-hidden">
    
        <h2 className="text-center text-8xl text-gray-800 font-bold mt-6"> Events </h2>

        <div className= "xl:flex-row flex flex-col justify-center xl:pt-16 pt-6"> {/** each event */}
          {/* <div className = "xl:flex-row flex-col justify-center"> */}
            <div className="px-6 xl:w-3/12 flex flex-col xl:gap-y-3 gap-y-6"> 
              <div className="xl:pt-4 xl:text-left text-center items-center text-gray-800 text-5xl xl:font-bold font-medium">October: Breast Cancer Awareness Tie-Dying</div>
              <div className="xl:pt-4 xl:text-left xl:pr-0 xl:pl-0 text-center md:pl-32 md:pr-32 items-center text-gray-700 text-lg"> Tie-dyes shirts pink for breast cancer awareness! Create pink breast cancer awareness symbols for each class to hang up in their room. Shirts are sold at lunch the following week. All proceceds are donated to breast cancer research.  </div>
            </div>
            <div className="xl:ml-0 xl:pt-0 pt-6 pr-6 pl-6">
              <div className="mx-auto w-fit from-pink-300 xl:p-6 p-4 via-red-300 to-purple-400 rounded-3xl bg-gradient-to-br">
                <Image src={BCA} className="rounded-2xl h-full" objectFit='cover'></Image>  
              </div>
            </div>
          {/* </div> */}
        </div>  


        <div className= "xl:flex-row flex flex-col-reverse justify-center xl:pt-16 pt-6"> {/** each event */}
          {/* <div className = "xl:flex-row flex-col justify-center"> */}
            <div className="xl:ml-0 xl:pt-0 pt-6 pr-6 pl-6">
              <div className="mx-auto w-fit from-red-300 xl:p-6 p-4 via-purple-400 to-pink-300 rounded-3xl bg-gradient-to-br">
                <Image src={BCA} className="rounded-2xl h-full" objectFit='cover'></Image>  
              </div>
            </div>
            <div className="px-6 xl:w-3/12 flex flex-col xl:gap-y-3 gap-y-6"> 
              <div className="xl:pt-4 xl:text-left text-center items-center text-gray-800 text-5xl xl:font-bold font-medium"> November: Grassroots Lunch Packing</div>
              <div className="xl:pt-4 xl:text-left xl:pr-0 xl:pl-0 text-center md:pl-32 md:pr-32 items-center text-gray-700 text-lg"> Donate and pack lunches/snacks to donate to grassroots! Draw and write encouraging cards for any recipients. Any potential snack donations such as chips, applesauce, juice, water bottles, et cetera are greatly appreciated! </div>
            </div>
          {/* </div> */}
        </div>  

        <div className= "xl:flex-row flex flex-col justify-center xl:pt-16 pt-6"> {/** each event */}
          {/* <div className = "xl:flex-row flex-col justify-center"> */}
            <div className="px-6 xl:w-3/12 flex flex-col xl:gap-y-3 gap-y-6"> 
              <div className="xl:pt-4 xl:text-left text-center items-center text-gray-800 text-5xl xl:font-bold font-medium"> December: Candymarks Bookmark Creation</div>
              <div className="xl:pt-4 xl:text-left xl:pr-0 xl:pl-0 text-center md:pl-32 md:pr-32 items-center text-gray-700 text-lg"> Cutout, draw, and laminate holiday themed bookmarks. Attatch candy canes to each bookmark. All bookamrks are donated to local hospitals.  </div>
            </div>
            <div className="xl:ml-0 xl:pt-0 pt-6 pr-6 pl-6">
              <div className="mx-auto w-fit from-pink-300 xl:p-6 p-4 via-red-300 to-purple-400 rounded-3xl bg-gradient-to-br">
                <Image src={BCA} className="rounded-2xl h-full" objectFit='cover'></Image>  
              </div>
            </div>
          {/* </div> */}
        </div>  

        

        
    
    </div>
  )
}
