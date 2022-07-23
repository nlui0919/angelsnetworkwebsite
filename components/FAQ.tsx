import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

type Props = {
  title: string;
  content: string;
};

const FAQ: React.FC<Props> = ({ title, content }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const con = useRef(null);

  function toggleAccordian() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : "${con.current.scrollHeight}px"
    );
  }

  return (
    <div className="flex flex-col">
      {" "}
      {/* accordion section */}
      <button
        className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white p-4 flex content-center ${setActive}"
        onClick={toggleAccordian}
      >
        {" "}
        {/* accordion */}
        <p>
          {" "}
          {/* accordion title */}
          {title}
        </p>
        <Chevron width={10} height={10} className="" fill="#777" />
      </button>
      <div
        ref={con}
        style={{ maxHeight: "${setHeight}" }}
        className="bg-white overflow-hidden	"
      >
        {/* accordion content */}
        {content}
        <div>{/* accordion text */}</div>
      </div>
    </div>
  );
};

export default FAQ;
