import { useState } from "react";
import ProfileImg from "../assets/img2.png";
function AboutMe() {
   const [about,SetAbout] = useState("About Me");
   const [aboutSect,SetAboutSect] = useState({
    image: ProfileImg ,
    title:"Frontend Developer",
    desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Distinctio quia reprehenderit, animi quo laudantium voluptate.`,
    desc2:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
    minima ab ea aliquam fugiat, iusto dicta recusandae atque
    voluptatibus incidunt corporis odio tempora quibusdam repellat
    voluptatum ipsum fuga illo nam.`,
    ReadButton: {
        title:"Read More...",
        link: `/ReadMore`,
      }
   });
   
  return (
    <div className="mainContainer space-y-8 py-5 ">
      <h1 className="text-center underline font-bold text-5xl">{about}</h1>
      <div className="flex items-center ">
        {/**Profile Image */}
        <div className="profileImage w-full flex justify-center">
          <img
            className="h-48 w-48 rounded-full shadow-lg"
            src={aboutSect.image}
            alt="Profile Image"
          />
        </div>
        <div className="aboutSection ">
          <div className="FrontEndHeader space-y-5">
            <h1 className="font-bold text-2xl">{aboutSect.title}</h1>
            <p className="text-sm mb-2">
              {aboutSect.desc1}
            </p>
            <p className="text-sm">
              {aboutSect.desc2}
            </p>
            <button
              className="h-18 w-24 rounded-xl bg-orange-500 shadow-lg text-sm font-semibold hover:text-white"
              >
              <a href={aboutSect.ReadButton.link}>{aboutSect.ReadButton.title}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
