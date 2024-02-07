import React from "react";

function Label({ passLength }) {
    const Strength = () => {
        if (passLength >= 4 && passLength <= 5) {
            return "Very Weak";
        } else if (passLength >= 6 && passLength <= 7) {
            return "Weak";
        } else if (passLength >= 8 && passLength <= 9) {
            return "Good";
        } else if (passLength >= 10 && passLength <= 11) {
            return "Strong";
        } else {
            return "Very Strong";
        }
    };

    const backgroundColor = () => {
        if (passLength >= 4 && passLength <= 5) {
            return "bg-orange-500";
        } else if (passLength >= 6 && passLength <= 7) {
            return "bg-orange-400";
        } else if (passLength >= 8 && passLength <= 9) {
            return "bg-orange-300";
        } else if (passLength >= 10 && passLength <= 11) {
            return "bg-lime-300";
        } else {
            return "bg-lime-400";
        }
    }

    return (
        <label className={"text-xs md:text-sm font-semibold text-darkCement " + backgroundColor() +  " px-3 py-1 rounded-md tracking-normal md:trackingwide md:w-28 text-center"}>
            {Strength()}
        </label>
    );
}

export default Label;
