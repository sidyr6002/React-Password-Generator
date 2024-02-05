import "./App.css";
import { AppContextProvider } from "./AppContextProvider";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import { PassLengthProvider } from "./context/PassLength";
import { UseUCaseProvider } from "./context/UseUpperCase";

function App() {
    return (
        <>
            <AppContextProvider>
                    <div className="flex flex-col h-svh justify-center items-center gap-3">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-10 flex justify-center items-center">
                            Password Generator
                        </h1>
                        <PasswordGenerator />
                    </div>
			</AppContextProvider>
               
        </>
    );
}

export default App;
