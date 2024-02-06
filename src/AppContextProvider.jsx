import { combineComponents } from "./components/CombineComponents";
import { PassLengthProvider } from "./context/PassLength";

const providers = [
    PassLengthProvider
]

export const AppContextProvider = combineComponents(...providers)