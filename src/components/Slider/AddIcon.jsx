import React, { useContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { PassLengthContext } from '../../context/PassLength';

const removeIconTheme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '3.1rem',
                    '@media (min-width: 600px)': {
                        fontSize: '3.4rem',
                    },
                    cursor: 'pointer',
                    color: '#a99985',
                    '&:hover': {
                        color: '#212529',
                    }
                },
                path: {
                    overflow: 'hidder',
                }
            }
        }
    }
})
function AddIcon() {
    const {passLength, setPassLength} = useContext(PassLengthContext);
  return (
    <button onClick={() => passLength < 50 && setPassLength(passLength + 1)}>
        <ThemeProvider theme={removeIconTheme}>
            <AddCircleOutlineRoundedIcon />
        </ThemeProvider>
    </button>
  )
}

export default AddIcon