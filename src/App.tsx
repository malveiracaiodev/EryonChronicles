
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Chapters from "./pages/chapters";
import Navbar from "./components/navbar";

function App() {
    return (
        <HashRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/capitulos" element={<Chapters />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
