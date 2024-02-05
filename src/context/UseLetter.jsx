import { createContext, useState } from "react";

export const useLetterContext = createContext(null);

export const UseLetterProvider = (Props) => {
    const [letter, setLetter] = useState(false);
    
    return (
        <useLetterContext.Provider value={{ letter, setLetter }}>
            {Props.children}
        </useLetterContext.Provider>
    );
}
