import React, {useRef, useState, useEffect} from 'react'
import { AccordionData } from './Types'

function FAQItems({data, isOpen, btnOnClick}: {data: AccordionData, isOpen: boolean, btnOnClick: () => void}) {

    const contentRef = useRef<HTMLDivElement>(null);
    const[height, setHeight] = useState(0);

    useEffect(() => {
        if(isOpen){
            const contentEl = contentRef.current as HTMLDivElement;

            setHeight(contentEl.scrollHeight);
        } else{
            setHeight(0);
        }
    }, [isOpen]);

  return (
    <li className="accordion-item border-2 my-2 mx-0 border-pink-300 rounded-lg">
        <h2 className="accordion-item-title text-center m-0 w-full first:border-top last:border-bottom flex justify-center">
            <button className="p-5 accordion-item-btn w-full sm:flex bg-pink-200 hover:bg-pink-300 duration-300 items-center px-4 text-lg font-medium select-none after:content-none after:w-4 after:h-4 after:mx-auto after:transition-transform after:ease-in-out " onClick={btnOnClick}>
                {data.title}
            </button>
        </h2>
        <div className="accordion-item-container transition-transform overflow-hidden" style={{height}}>
            <div ref={contentRef} className="accordion-item-content border-t-2 p-4">
                {data.content}
            </div>
        </div>
    </li>
  )
}

export default FAQItems