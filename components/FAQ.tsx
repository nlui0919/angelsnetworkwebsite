// import React, {useState, useRef, useEffect} from 'react'
// import Chevron from './Chevron'


// type props = {
//   title: string;
//   content: string;
// }

// export default function FAQ({title, content, isOpen, btnOnClick}: {title: String, content: String, isOpen: boolean, btnOnClick: () => void}) {

//   // const [setActive, setActiveState] = useState("");
//   // const [setHeight, setHeightState] = useState("0px");

//   // const con = useRef(null);

//   // function toggleAccordian(){
//   //   setActiveState(setActive === "" ? "active" : "");
//   //   setHeightState(
//   //     setActive === "active" ? "0px" : '${con.current.scrollHeight}px'
//   //   );
//   // }

//   const contentRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if(isOpen){
//       const contentEl = contentRef.current as HTMLDivElement;

//       setHeight(contentEl.scrollHeight);
//     } else{
//       setHeight(0);
//     }
//   }, [isOpen]);

//   return (
//     <div className="flex flex-col"> {/* accordion section */}
//       <button className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white p-4 flex content-center" onClick={btnOnClick}> {/* accordion */}
//         <p> {/* accordion title */}
//           {title}
//         </p>
//         <Chevron width={10} height = {10} className={""} fill={'#777'}/>
//       </button> 
//       <div className="bg-white overflow-hidden" style ={{height}}>{/* accordion content */}
//         {content}
//         <div>{/*accordion text */}

//         </div>
//       </div>
//     </div>
//   )
// }

import React, {useState} from 'react';
import FAQItems from './FAQItems';
import { AccordionData } from './Types';


export default function Faq({items} : {items: Array<AccordionData>}) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => currentValue !== idx ? idx : -1);
  };

  return (
    <ul className="accordion list-none m-0 p-16">
      {
        items.map((item, idx) => (
          <FAQItems key={idx} data={item} isOpen={idx === currentIdx} btnOnClick={() => btnOnClick(idx)} />
        ))
      }
    </ul>
  )
}


