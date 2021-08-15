import React from "react";
import { Fragment } from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const loginHandler = (e) => {
    console.log("Hello");
  };
  return (
    <div className="relative  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="fixed relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="flex justify-between">
            <img
              className="ml-2 lg:ml-12 h-8 w-auto sm:h-24 mt-2 md:mt-12"
              src={Logo}
            />
            <button
              // style={{
              //   backgroundColor: "#E76F51",
              // }}
              className="mt-2 bg-yellow-500 h-8 md:h-12 hover:bg-yellow-400 md:mt-12 mr-2 md:mr-12 py-1 px-2 md:py-3  md:px-3 text-white font-bold rounded-lg"
              onClick={() => loginHandler()}
            >
              Sign in
            </button>
          </div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {" "}
                <span className="block xl:inline">
                  Your New Favorite <span className="text-green-600">Food</span>{" "}
                  Could Be
                </span>{" "}
                <br />{" "}
                <span className="block text-green-600 xl:inline">
                  NEXT DOOR!
                </span>
              </h1>
              <br />

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {/* <div className="rounded-md shadow">
                  <input className="border-2" type="text" name="" id="" />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
                <input
                  type="text"
                  name=""
                  placeholder="Search your Location"
                  className="bg-transparent outline-none text-white ml-4 border-2 py-1 px-2 md:py-3 md:px-3  rounded-lg border-opacity-80 sm:mr-2"
                  id=""
                />
                <button
                  onClick={() => loginHandler()}
                  className="bg-yellow-500 hover:bg-yellow-400 py-1 px-2 md:py-3 md:px-3  text-white font-bold rounded-lg"
                >
                  Locate
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1536184071535-78906f7172c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          alt=""
        />
      </div>
    </div>
  );
};
export default Header;
