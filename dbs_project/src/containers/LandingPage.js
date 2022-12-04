import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import axios from "axios";
import {Link} from "react-router-dom";

function LandingPage() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('dbs_project/category.php')
            .then((response) => {
                setCategory(response.data);
            })
    }, []);

    return (
        <div className="landing_page">
            <NavBar/>
            <div className="category_container">
                {category.map((element) => (
                    <Link to={`/category/${element.name}`} state={{category: element.name}}>
                        <h2>{element.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;