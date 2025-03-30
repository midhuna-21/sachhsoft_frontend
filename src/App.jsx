import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";
import AppRouter from './routes/AppRouter.jsx'

function App() {
    return (
        <>
            <Toaster />
            <Router>
                <Routes>
                    <Route path="/*" element={<AppRouter />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;