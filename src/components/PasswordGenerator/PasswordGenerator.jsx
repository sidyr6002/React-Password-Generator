import React, { useContext } from "react";
import { LuRotateCcw } from "react-icons/lu";
import Slider from "../Slider/Slider";
import CheckBox from "../CheckBox/CheckBox";
import Label from "../Label/Label";
import { PassLengthContext } from "../../context/PassLength";

function PasswordGenerator() {
    const { passLength } = useContext(PassLengthContext);
    const [useUpperCase, setUpperCase] = React.useState(false);
    const [useLowerCase, setLowerCase] = React.useState(false);
    const [useNumbers, setNumbers] = React.useState(false);
    const [useSymbols, setSymbols] = React.useState(false);

    console.log("Password Length", passLength);
    console.log(useUpperCase, useLowerCase, useNumbers, useSymbols);

    return (
        <div className=" flex flex-col justify-center items-center w-fit">
            <div className="flex md:flex-row flex-col justify-center items-center gap-0 md:gap-2  w-fit p-1">
                <div className=" flex items-center gap-1 md:gap-3 p-2 md:p-3 rounded-full shadow-inside">
                    <input
                        type="text"
                        className="border-0 font-light tracking-normal md:tracking-wide focus:border-0 focus:outline-none text-base md:text-2xl ml-2 md:ml-5 text-ellipsis w-48 md:w-fit bg-main"
                        value="Rahul Siddhardh "
                        disabled
                    ></input>
                    <Label passLength={passLength}/>
                    <button>
                        <LuRotateCcw className="ml-1 md:ml-2 md:text-xl text-base" />
                    </button>
                </div>
                <div>
                    <button className="m-2 md:m-3 px-4 md:px-7 py-2 md:py-4 transition-spacing ease-out delay-75 hover:m-1 md:hover:m-2 hover:px-5 md:hover:px-8 hover:py-3 md:hover:py-5 rounded-full bg-cement shadow-button">
                        <span className="text-slate-100 transition-none text-sm md:text-base font-bold tracking-wider">
                            Copy
                        </span>
                    </button>
                </div>
            </div>
            <div className=" border-yellow-500 w-full">
                <div className=" m-3 p-1 flex flex-col md:flex-row justify-center items-center gap-4 ">
                    <div className="flex md:flex-start md:justify-center">
                        <label htmlFor="length">
                            <span className="font-light md:text-xl tracking-wide">
                                Password length
                            </span>
                            :{" "}
                            <span className="font-bold ml-1 md:text-xl text-charcoal">
                                {passLength < 10 ? `0${passLength}` : passLength}
                            </span>
                        </label>
                    </div>
                    <div className="flex md:flex-grow justify-center items-center gap-2 w-full md:w-fit md:pl-16">
                        <Slider />
                    </div>
                </div>
                <div className=" m-3 p-1 flex flex-col md:flex-row gap-4 md:gap-28 ">
                    <div className="flex justify-center items-center">
                        <label htmlFor="characters"><span className="font-light md:text-xl tracking-wide">Characters used:</span></label>
                    </div>
                    <div className="  p-1 flex gap-1 justify-between items-center grow text-darkCement">
                        <div className="flex items-center gap-1">
                            <CheckBox checked={useUpperCase} onChange={(event) => setUpperCase(event.target.checked)}/>
                            <label htmlFor="useUpperCase" onClick={() => setUpperCase(!useUpperCase)}>
                                <span className="text-lg md:text-xl font-medium tracking-tight">ABC</span>
                            </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckBox checked={useLowerCase} onChange={(event) => setLowerCase(event.target.checked)}/>
                            <label htmlFor="useLowerCase">
                                <span className="text-lg md:text-xl font-medium tracking-tight">abc</span>
                            </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckBox checked={useNumbers} onChange={(event) => setNumbers(event.target.checked)}/>
                            <label htmlFor="useNumbers">
                                <span className="text-lg md:text-xl font-medium tracking-tight">123</span>
                            </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckBox checked={useSymbols} onChange={(event) => setSymbols(event.target.checked)}/>
                            <label htmlFor="useSymbols">
                                <span className="text-lg md:text-xl font-medium tracking-tight">@#&</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
