import React from 'react'
import RemoveIcon from './RemoveIcon';
import AddIcon from './AddIcon';
import RangeSlider from './RangeSlider';

function Slider() {
    return (
        <>
            <div className="flex md:flex-grow justify-center items-center gap-2 w-full md:w-fit md:pl-16">
                <RemoveIcon />
                <div className="w-48 md:w-full mx-1.5 md:mx-2">
                    <RangeSlider />
                </div>
                <AddIcon />
            </div>
        </>
    );
}

export default Slider