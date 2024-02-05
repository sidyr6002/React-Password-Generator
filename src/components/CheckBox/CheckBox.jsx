import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
// import './CheckBox.css'

const checkBoxTheme = createTheme({
    components: {
        MuiCheckbox: {
            styleOverrides: {
                '.MuiButtonBase-root': {
					color: "red",
                    '&path': {
						fill: "red"
					},
                },
            },
        },
    },
});
function CheckBox({ checked, onChange }) {
    return (
        <input type="checkbox" value={checked} onChange={onChange} className="appearance-none w-5 h-5 rounded-md mr-2"></input>
    );
}




export default CheckBox;
