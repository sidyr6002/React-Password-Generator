import React from "react";
import RemoveIcon from "./RemoveIcon";
import AddIcon from "./AddIcon";
import RangeSlider from "./RangeSlider";

function Slider() {
    //console.log("Slider");
    return (
        <>
            <RemoveIcon />
            <div className="w-48 md:w-full mx-1.5 md:mx-2">
                <RangeSlider />
            </div>
            <AddIcon />
        </>
    );
}

export default Slider;
