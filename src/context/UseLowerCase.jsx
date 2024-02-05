import { createContext, useState } from "react";

export const useLowerCaseContext = createContext(null);

export const UseLCaseProvider = (Props) => {
    const [useLowerCase, setLowerCase] = useState(false);

    return (
        <useLowerCaseContext.Provider value={{ useLowerCase, setLowerCase }}>
            {Props.children}
        </useLowerCaseContext.Provider>
    );
};
