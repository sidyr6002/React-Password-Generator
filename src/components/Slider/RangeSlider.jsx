import React, { useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import { PassLengthContext } from "../../context/PassLength";

const rangeTheme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                track: {
                    height: "13px",
                    color: "rgba(59, 130, 246, 1)",
                },
                rail: {
                    height: "10px",
                    color: "gray",
                },
                thumb: {
                    height: "33px",
                    width: "33px",
                    "@media (min-width: 600px)": {
                        height: "36px",
                        width: "36px",
                    },
                    color: "white",
                    border: `1px solid blue`,
                },
            },
        },
    },
});

function RangeSlider() {
    const { passLength, setPassLength } = useContext(PassLengthContext);

    return (
        <ThemeProvider theme={rangeTheme}>
            <Slider
                onChange={(e) => setPassLength(e.target.value)}
                value={passLength}
                min={4}
                max={50}
                defaultValue={12}
                aria-label="Default"
                valueLabelDisplay="off"
                name="passLength"
            />
        </ThemeProvider>
    );
}

export default RangeSlider;
