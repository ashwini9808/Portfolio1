import React from "react";
import Img from "../assets/img2.png";
import bannerBackground from "../assets/banner_wallpaper.svg";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Banner() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","that","you are looking for."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      loop:true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center text-sm py-2 text-white"
    >
      {/**first Container */}
      <div className="w-full flex justify-center">
        {/* text */}
        <div className="w-2/3 ms-10">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className=" mt-4 text-4xl font-bold">Ashwini Yadav</h1>
          <h2 className="mt-4 text-2xl"><span ref={el}></span></h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Saepe, atque debitis ducimus architecto error veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit rem doloribus delectus porro. Sunt.
          </p>

        <div className="icon-container mt-5">
            <i className=" h-12 w-12 flex justify-center items-center text-3xl bg-gray-700 rounded-full cursor-pointer hover:bg-orange-500 fa-brands fa-linkedin-in"></i>
        </div>
               
          <a
            className=" inline-block mt-2 px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-sm"
            href="/contact"
          >
            Contact me
          </a>
        </div>
      </div>

      {/**Second Container */}

      <div className="w-full flex justify-center">
        {/* image */}
        <img className="h-52 w-52 rounded-full shadow-lg" src={Img} alt="img1" />
      </div>
    </div>
  );
}

export default Banner;
