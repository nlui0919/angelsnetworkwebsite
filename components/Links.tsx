import React from 'react'


export default function Events() {
  return (
    <section id = "links" className="white px-0 w-full flex items-center justify-center h-auto sm:py-0 py-32">
        <div className = "w-3/4 flex items-center flex-col object-contain justify-around h-96 py-12">
            <h1 className = "sm:text-5xl sm:pt-0 pt-12 text-3xl font-bold"> About Us </h1>
            <h2 className = "text-xl text-center"> Angel's Network is River Hill's largest community service club. From raising money for breast cancer awareness to donating lunches to Grassroots, our goal is to make the community a better place in any way we can. We are a low commitment club, and we welcome any members at any time of the year. Sign up below! </h2>
            
            <a className = "bg-pink-300 w-40 p-6 flex justify-center hover:scale-105 duration-200 rounded-md flex-col border border-[#f5eddd]" href = "https://forms.gle/s6Aznof4pLuh2oo27" target="_blank">  <div className = "text-center">JOIN NOW</div> </a>
        </div>
    </section>
  )
}
