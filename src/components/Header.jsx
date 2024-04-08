import { useState } from "react";

function Header() {
  const [brandName, SetBrandName] = useState("Ashwini Yadav");
  const [menuLinks, SetMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contacts",
      link: "/contacts",
      id: 5,
    },
  ]);
  const [actionButton, SetActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });
  return (
    <>
      <div className="main h-19 border flex justify-between items-center px-16 bg bg-gray-100">
        <div>
          {/* Brand logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {/* menu links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
          {/* <a href="/home" className="hover:text-orange-600">Home</a>
            <a href="/about" className="hover:text-orange-600">About</a>
            <a href="/skills" className="hover:text-orange-600">Skills</a>
            <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
            <a href="/Contact" className="hover:text-orange-600">Contacts</a> */}
        </div>
        <div>
          {/* buttons */}
          <a href={actionButton.link} className="px-2 py-0.8 bg-orange-500 rounded-full shadow ">
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
