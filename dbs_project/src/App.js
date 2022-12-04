import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import CategoryProductPage from "./containers/CategoryProductPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import ManagerPage from "./containers/ManagerPage";
import ShoppingBasketPage from "./containers/ShoppingBasketPage";
import OrderListPage from "./containers/OrderListPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/category/:category" element={<CategoryProductPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/manager" element={<ManagerPage/>}/>
                    <Route path="/my_cart" element={<ShoppingBasketPage/>}/>
                    <Route path="/order_list" element={<OrderListPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
