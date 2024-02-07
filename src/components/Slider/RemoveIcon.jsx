import React, { useContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { PassLengthContext } from '../../context/PassLength';

const removeIconTheme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '3.1rem',
                    '@media (min-width: 600px)': {
                        fontSize: '3.4rem',
                        '&:hover': {
                            color: '#212529',
                        }
                    },
                    cursor: 'pointer',
                    color: '#a99985',
                    '&:active': {
                        color: '#212529',
                    },
                }
            }
        }
    }
})
function RemoveIcon() {
    const {passLength, setPassLength} = useContext(PassLengthContext);
    return (
        <button onClick={() => passLength > 4 && setPassLength(passLength - 1)}>
            <ThemeProvider theme={removeIconTheme}>
                <RemoveCircleOutlineRoundedIcon />
            </ThemeProvider>
        </button>
    )
}

export default RemoveIcon