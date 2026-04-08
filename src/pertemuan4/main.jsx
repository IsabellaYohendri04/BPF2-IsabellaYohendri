import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import "./tailwind.css";
import HitungGajiForm from "./components/HitungGajiForm";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <TailwindCSS/>
        
            <HitungGajiForm/>
        </div>
    )