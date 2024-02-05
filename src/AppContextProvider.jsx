import { combineComponents } from "./components/CombineComponents";
import { PassLengthProvider } from "./context/PassLength";
import { UseUCaseProvider } from "./context/UseUpperCase";

const providers = [
    PassLengthProvider,
    UseUCaseProvider
]

export const AppContextProvider = combineComponents(...providers)