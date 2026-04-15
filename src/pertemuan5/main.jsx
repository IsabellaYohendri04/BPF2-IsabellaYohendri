import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./components/FrameworkList";
import FrameworkListSearchFilter from "./components/FrameworkListSearchFilter";


createRoot(document.getElementById("root"))
    .render(
        <div className="min-h-screen bg-gray-100">
            <FrameworkList />
            <FrameworkListSearchFilter/>
            
        </div>
    )

