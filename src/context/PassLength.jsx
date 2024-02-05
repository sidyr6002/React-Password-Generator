import { createContext, useState } from "react";

export const PassLengthContext = createContext(null);

export const PassLengthProvider = (Props) => {
    const [passLength, setPassLength] = useState(12);

    return (
        <PassLengthContext.Provider value={{passLength, setPassLength}}>
            {Props.children}
        </PassLengthContext.Provider>
    )
}