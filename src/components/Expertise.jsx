import bannerBackground from "../assets/banner_wallpaper.svg";
function Expertise() {
  return (
    <div className="mainContainer pt-5">
      <h1 className="text-5xl font-bold text-center underline">My Expertise</h1>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: "cover",
        }}
      >
        {/** Box container */}
        <div className="boxContainer flex justify-between items-center mt-10">
          <div className="w-full">
          <div className="py-10 px-16 w-2/3 text-white">
            {/** txt container */}
            <h1 className="text-2xl font-bold uppercase">
              I love these techonologies
            </h1>
            <p className="py-10 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              animi dignissimos deleniti illo,Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Velit, dignissimos.
               Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Ad, nam!
            </p>
            <button className="px-4 py-2 bg-orange-500 rounded-full shadow ">
              Hire me
            </button>
          </div>
          </div>
          <div className="flex justify-start">
            {/**skills container */}
            <div className="flex w-2/3 ms-5 space-x-3 flex-wrap "> 
              <p className="bg-gray-300  px-3 py-2 rounded-full   shadow hover:bg-gray-400">Html</p>
              <p className="bg-gray-300  px-3 py-2 rounded-full shadow hover:bg-gray-400">CSS</p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                React JS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                Next JS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                Tailwind
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                Bootstarpe
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">
                Core Java
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 rounded-full shadow hover:bg-gray-400">SQL</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
