import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Title() {
  const [y, setY] = useState(0);

  const handleScroll = () => {
    console.log(y);
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  return (
    <>
      <div className="bg-gradient-to-bl from-white via-red-300 to-pink-300 text-white w-screen h-screen flex justify-center items-center">
        <h1 className="sm:text-9xl text-5xl font-bold text-center">
          Angel's Network
        </h1>
        <Link
          to="links"
          smooth="true"
          duration={500}
          className={`absolute bottom-0 duration-200 ${
            y > 87 ? "opacity-0" : "opacity-100"
          } `}
        >
          <i className="border-solid m-2 border-white border-b-8 border-r-8 inline-block p-3 transform rotate-45 sm:hover:scale-125 duration-200 "></i>
        </Link>
      </div>
    </>
  );
}
