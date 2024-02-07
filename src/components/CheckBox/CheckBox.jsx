import React from "react";

function CheckBox({ checked, onChange }) {
    // console.log("CheckBox", checked);
    return (
            <div className="flex items-center">
                <input
                    type="checkbox"
                    name="custom-switch-checkbox"
                    value="yes"
                    className="opacity-0 absolute h-4 w-4"
                    checked={checked}
                    onChange={onChange}
                />
                <div className="bg-cement border-0 rounded-md w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 shadow-checkbox p-0.5">
                    <svg
                        className="fill-current hidden w-3 h-3 pointer-events-none"
                        version="1.1"
                        viewBox="0 0 17 12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fillRule="evenodd">
                            <g
                                transform="translate(-9 -11)"
                                fill="#f5f1ed"
                                fillRule="nonzero"
                            >
                                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

    );
}

export default CheckBox;

// <div className="flex justify-center items-center rounded-lg  shadow-slider overflow-hidden mr-1 md:mr-2">
//         </div>
