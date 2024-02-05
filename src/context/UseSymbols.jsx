import { createContext, useState } from "react";

export const useSymbolsContext = createContext(null);

export const UseSymbolsProvider = (Props) => {

    const [useSymbols, setSymbols] = useState(false);
    
    return (
        <useSymbolsContext.Provider value={{ useSymbols, setSymbols }}>
            {Props.children}
        </useSymbolsContext.Provider>
    );
}