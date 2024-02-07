import { createContext, useState } from "react"


export const SliderAlertContext = createContext(null);

export const SliderAlertProvider = (Props) => {
    const [activeSlider, setActiveSlider] = useState(false);
    const [initialRender, setInitialRender] = useState(true);

    return (
        <SliderAlertContext.Provider value={{activeSlider, setActiveSlider, initialRender, setInitialRender}}>
            {Props.children}
        </SliderAlertContext.Provider>
    )
}