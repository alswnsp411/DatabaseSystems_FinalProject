import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import CategoryProductPage from "./containers/CategoryProductPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>} />
                    <Route path="/category/:category" element={<CategoryProductPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
