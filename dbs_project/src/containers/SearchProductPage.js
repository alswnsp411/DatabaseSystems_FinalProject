import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import SearchResult from "../_components/SearchResult";

function SearchProductPage() {
    const location = useLocation();
    const searchWord = location.state.searchWord;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const searchProductForm = new FormData();
            searchProductForm.append("searchWord", searchWord);
            try {
                const response = await axios(
                    {
                        method: "POST",
                        url: "http://localhost:3000/dbs_project/search.php",
                        data: searchProductForm,
                        headers: {"Content-Type": "multipart/form-data",},
                    });
                setProducts(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="SearchProductPage">
            <NavBar/>
            <h4>{searchWord}에 대한 검색 결과</h4>
            <div style={{backgroundColor: "var(--color-line)"}}>
                <hr/>
                <span className="table">|</span>
                <span className="table" style={{width: "1%"}}>id</span>
                <span className="table">|</span>
                <span className="table" style={{width: "10%"}}>상품 이름</span>
                <span className="table">|</span>
                <span className="table" style={{width: "10%"}}>상품 사진</span>
                <span className="table">|</span>
                <span className="table" style={{width: "5%"}}>가격</span>
                <span className="table">|</span>
                <span className="table" style={{width: "5%"}}>수량</span>
                <span className="table">|</span>
                <span className="table" style={{width: "25%"}}>상품 정보</span>
                <span className="table">|</span>
                <span className="table" style={{width: "5%"}}>카테고리</span>
                <span className="table">|</span>
                <span className="table" style={{width: "14%"}}>장바구니에 담기/주문하기</span>
                <span className="table">|</span>
                <hr/>
            </div>
            <div className="ProductDataTable">
                {products.map((element) => (
                    <SearchResult key={element.id} id={element.id} name={element.name} picture={element.picture}
                                  price={element.price} count={element.count} information={element.information}
                                  categoryName={element.category_name}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchProductPage;