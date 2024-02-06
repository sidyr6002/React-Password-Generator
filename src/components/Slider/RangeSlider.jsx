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
                    color: "#70798c",
                },
                rail: {
                    height: "10px",
                    color: "gray",
                    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
                },
                thumb: {
                    height: "33px",
                    width: "33px",
                    "@media (min-width: 600px)": {
                        height: "36px",
                        width: "36px",
                    },
                    boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.3)',
                    color: "#a99985",
                    border: `0px solid blue`,
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
                sx={{
                    "& .MuiSlider-thumb": {
                        "&:hover, &.Mui-focusVisible, &.Mui-active": {
                            boxShadow: "none",
                        },
                    },
                }}
            />
        </ThemeProvider>
    );
}

export default RangeSlider;
