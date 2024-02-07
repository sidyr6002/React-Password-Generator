import { useContext } from "react";
import SuccessAlert from "./components/Alert/SuccessAlert";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import { SliderAlertContext } from "./context/SliderAlert";
import "./App.css";

function App() {
    const { activeSlider, initialRender } = useContext(SliderAlertContext);

    return (
        <>
            <div className="flex flex-col h-svh justify-center items-center gap-3 bg-main">
                <div className={"fixed top-3 " + (activeSlider ? "animate-fadeIn" : (initialRender ? "hidden" : "animate-fadeOut"))}>
                     <SuccessAlert />
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-darkCement mb-10 text-center tracking-tight">
                    Password Generator
                </h1>
                <PasswordGenerator />
            </div>
        </>
    );
}

export default App;
