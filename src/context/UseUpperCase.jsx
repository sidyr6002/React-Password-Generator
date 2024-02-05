import { createContext, useState } from "react";

export const UseUpperCaseContext = createContext(null);

export const UseUCaseProvider = (Props) => {
    const [useUpperCase, setUpperCase] = useState(false);

    console.log("Uppercase", useUpperCase);

    return (
        <UseUpperCaseContext.Provider value={{ useUpperCase, setUpperCase }}>
            {Props.children}
        </UseUpperCaseContext.Provider>
    );
};
