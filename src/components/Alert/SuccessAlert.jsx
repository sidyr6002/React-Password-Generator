import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function SuccessAlert() {
    return (
        <Alert
            severity="success"
            sx={{
                bgcolor: "#252323",
                borderRadius: "10px",
                ".MuiAlert-message, .MuiAlert-icon": {
                    color: "#f5f1ed",
                },
            }}
        >
            <AlertTitle>Success</AlertTitle>
            The text has been copied to the clipboard
        </Alert>
    );
}

export default SuccessAlert;
