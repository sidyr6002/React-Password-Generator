import React, { useContext } from "react";
import { UseUpperCaseContext } from "../../context/UseUpperCase";
import CheckBox from "./CheckBox";

function CheckBoxComp() {
    const { useUpperCase, setUpperCase } = useContext(UseUpperCaseContext);
    return (
        <>
            <div className="flex justify-center items-center">
                <CheckBox checked={useUpperCase} onChange={(event) => setUpperCase(event.target.checked)} />
                <label htmlFor="useUpperCase">
                    <span className="text-lg font-bold">A-Z</span>
                </label>
            </div>
        </>
    );
}

export default CheckBoxComp;
