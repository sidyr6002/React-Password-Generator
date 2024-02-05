import React from "react";
import { LuRotateCcw } from "react-icons/lu";
import Slider from "../Slider/Slider";
import PasswordLabel from "../PasswordLabel/PasswordLabel";
import CheckBoxComp from "../CheckBox/CheckBoxComp";
import { CheckboxHorizontalListGroup } from "../CheckBox/CheckboxHorizontalListGroup";

function PasswordGenerator() {
   

    // const [useLowerCase, setLowerCase] = React.useState(false);
    // const [useNumbers, setNumbers] = React.useState(false);
    // const [useSymbols, setSymbols] = React.useState(false);
    // console.log(passLength)

    return (
        <div className=" flex flex-col justify-center items-center w-fit">
            <div className="flex md:flex-row flex-col justify-center items-center gap-0 md:gap-2  w-fit p-1">
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
                    <button className="m-2 md:m-3 px-4 md:px-7 py-2 md:py-4 transition-spacing ease-out delay-75 hover:m-1 md:hover:m-2 hover:px-5 md:hover:px-8 hover:py-3 md:hover:py-5 rounded-full bg-blue-600">
                        <span className="text-slate-100 transition-none text-sm md:text-base font-bold tracking-wider">
                            Copy
                        </span>
                    </button>
                </div>
            </div>
            <div className=" mt-0 border-yellow-500 w-full">
                <div className=" flex flex-col md:flex-row justify-center items-center gap-4 m-3 p-1 ">
                    <PasswordLabel />
                    <Slider />
                </div>
                <div className=" m-3 p-1 flex flex-col md:flex-row gap-3">
                    <div className="flex justify-center items-center">
                        <label htmlFor="characters"><span className="font-light md:text-xl tracking-wide">Characters Used:</span></label>
                    </div>
                    <div className="flex gap-2 justify-around items-center grow">
                        <CheckboxHorizontalListGroup />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;


{/* <div className="flex justify-center items-center">
                            <Checkbox checked={useLowerCase} onChange={(event) => setLowerCase(event.target.checked)}/>   
                            <label htmlFor="useUpperCase">
                                <span className="text-lg font-bold">a-z</span>
                            </label>
                        </div>
                        <div className="flex justify-center items-center">
                            <Checkbox checked={useNumbers} onChange={(event) => setNumbers(event.target.checked)}/>
                            <label htmlFor="useUpperCase">123</label>
                        </div>
                        <div className="flex justify-center items-center">
                            <Checkbox checked={useSymbols} onChange={(event) => setSymbols(event.target.checked)}/>
                            <label htmlFor="useUpperCase">@$&</label>
                        </div> */}