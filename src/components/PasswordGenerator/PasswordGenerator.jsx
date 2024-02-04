import React from 'react'
import { LuRotateCcw } from "react-icons/lu";

function PasswordGenerator() {
  return (
      <div className="flex justify-center items-center">
          <div className="flex md:flex-row flex-col justify-center items-center gap-0 md:gap-2  w-fit p-1">
              <div className="border-2 flex items-center gap-1 md:gap-3 p-2 md:p-3 rounded-full">
                  <input
                      type="text"
                      className="font-light tracking-normal md:tracking-wide focus:border-0 focus:outline-none text-base md:text-2xl ml-2 md:ml-5 text-ellipsis w-48 md:w-fit"
                      value="Rahul Siddhardh "
                      disabled
                  ></input>
                  <label className="text-xs md:text-sm font-semibold text-blue-600 bg-lime-500 px-3 py-1 rounded-md tracking-normal md:tracking-wide">
                      Very Strong
                  </label>
                  <button>
                    <LuRotateCcw className="ml-1 md:ml-2 md:text-xl text-base" />
                  </button>
              </div>
              <div>
                  <button className="mt-3 md:m-3 px-4 md:px-7 py-2 md:py-4 transition-spacing ease-out delay-75 hover:m-1 md:hover:m-2 hover:px-5 md:hover:px-8 hover:py-3 md:hover:py-5 rounded-full bg-blue-600">
                      <span className="text-slate-100 transition-none text-sm md:text-base font-bold tracking-wider">
                          Copy
                      </span>
                  </button>
              </div>
          </div>
          <div></div>
      </div>
  );
}

export default PasswordGenerator