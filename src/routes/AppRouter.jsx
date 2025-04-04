import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Team from "../pages/Team";

const AppRouter = () => {
    return (
        <div className="w-full overflow-hidden">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
        </Routes>
    </div>
    );
};
export default AppRouter;
