import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import NavBar from "./NavBar";

function CategoryProductPage() {
    const location=useLocation();
    const category= location.state.category;

    return (
        <div className="CategoryProductPage">
            <NavBar />
            {category}
        </div>
    );
}

export default CategoryProductPage;