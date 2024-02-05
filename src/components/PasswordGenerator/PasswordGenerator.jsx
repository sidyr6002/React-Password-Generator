import React from 'react'
import { LuRotateCcw } from "react-icons/lu";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import  Slider  from '@mui/material/Slider';
import './PasswordGenerator.css'

function PasswordGenerator() {
  return (
      <div className="border-2 flex flex-col justify-center items-center w-fit">
          <div className="border-2 flex md:flex-row flex-col justify-center items-center gap-0 md:gap-2  w-fit p-1">
              <div className="border-2 flex items-center gap-1 md:gap-3 p-2 md:p-3 rounded-full">
                  <input
                      type="text"
                      className="border-0 font-light tracking-normal md:tracking-wide focus:border-0 focus:outline-none text-base md:text-2xl ml-2 md:ml-5 text-ellipsis w-48 md:w-fit"
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
          <div className='border-2 mt-5 border-yellow-500 w-full'>
            <div className='border-2 flex flex-col justify-center items-center gap-4 m-3 p-2'>
                <label htmlFor="length">
                    <span>Password Length</span>: <span>12</span>
                </label>
                <div className='flex justify-center items-center gap-2 w-full'>
                    <button>
                        <CiCircleMinus className='text-5xl'/>
                    </button>
                    <div className= 'w-48'>
                        <Slider min = {4} max = {50} defaultValue={12} aria-label="Default" valueLabelDisplay="auto" />
                    </div>
                    <button>
                        <CiCirclePlus className='text-5xl'/>
                    </button>
                </div>
            </div>
            <div></div>
          </div>
      </div>
  );
}

export default PasswordGenerator