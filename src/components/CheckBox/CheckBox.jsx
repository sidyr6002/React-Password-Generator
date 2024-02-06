import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
// import './CheckBox.css'


function CheckBox({ checked, onChange }) {
    // console.log("CheckBox", checked);
    return (
        <div className="flex justify-center items-center rounded-lg  shadow-slider overflow-hidden mr-1 md:mr-2">
 <input type="checkbox" checked={checked} onChange={onChange} className="appearance-none w-5 h-5 focus:ring-0 focus:ring-offset-0 rounded-md m-0 border-0 p-0"></input>
           
        </div>
    );
}




export default CheckBox;
