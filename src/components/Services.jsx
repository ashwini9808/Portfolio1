import React from "react";

function Services() {
  return (
    <>
      <div className="mainContainer py-1">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
      </div>
      <div className="servicesContainer flex py-5 space-x-3">
        <div className="service1 px-10 shadow rounded-xl bg-slate-200 p-5 text-center space-y-3">
          <h1 className="text-4xl">Web Devlopment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolores eius a, consequatur soluta iste. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?
          </p>
          <button className="px3 py2 bg-orange-500 text-2xl rounded-full shadow-xl">Check</button>
        </div>
        <div className="service1 px-10 shadow rounded-xl  bg-slate-200 p-5 text-center space-y-3">
          <h1 className="text-4xl">Anroid Development</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolores eius a, consequatur soluta iste. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?
          </p>
          <button className="px3 py2 bg-orange-500 text-2xl rounded-full shadow-xl">Check</button>
        </div>
        <div className="service1 shadow rounded-xl px-10  bg-slate-200 p-5 text-center space-y-3">
          <h1 className="text-4xl">Web Devlopment</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolores eius a, consequatur soluta iste. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Perferendis, eveniet?
          </p>
          <button className="px3 py2 bg-orange-500 text-2xl rounded-full shadow-xl">Check</button>
        </div>
        
        
        
      </div>
    </>
  );
}

export default Services;
