import { combineComponents } from "./components/CombineComponents";
import { PassLengthProvider } from "./context/PassLength";
import { SliderAlertProvider } from "./context/SliderAlert";

const providers = [
    PassLengthProvider,
    SliderAlertProvider
]

export const AppContextProvider = combineComponents(...providers)