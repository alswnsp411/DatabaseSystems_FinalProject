import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import axios from "axios";
import Product from "../_components/Product";

function ManageProductPage() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);
    const [information, setInformation] = useState("");
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        axios.get('http://localhost:3000/dbs_project/checkProduct.php')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data)
            })
    }, []);

    const addProduct = async (e) => {
        e.preventDefault();

        const addProductForm = new FormData();
        addProductForm.append("name", name);
        addProductForm.append("picture", picture);
        addProductForm.append("price", price);
        addProductForm.append("count", count);
        addProductForm.append("information", information);
        addProductForm.append("categoryName", categoryName);
        try {
            await axios(
                {
                    method: "POST",
                    url: "dbs_project/addProduct.php",
                    data: addProductForm,
                    headers: {"Content-Type": "multipart/form-data",},
                });
            alert(`${name}님 환영합니다 ~`);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="ManageProductPage">
            <NavBar/>
            <h4>상품 추가</h4>
            <form>
                상품 이름 :
                <input type="text" placeholder="상품 이름"
                       value={name} onChange={(e) => setName(e.target.value)}/>
                사진 :
                <input type="text" placeholder="사진" value={picture}
                       onChange={(e) => setPicture(e.target.value)}/>
                가격 :
                <input type="number" placeholder="가격" value={price}
                       onChange={(e) => setPrice(parseInt(e.target.value))}/>
                수량 :
                <input type="number" placeholder="수량"
                       value={count} onChange={(e) => setCount(parseInt(e.target.value))}/>
                상품 정보 :
                <input type="text" placeholder="상품 정보"
                       value={information} onChange={(e) => setInformation(e.target.value)}/>
                카테고리 :
                <input type="text" placeholder="카테고리"
                       value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
                <button className="login_sign_in_button" type="submit" onClick={addProduct}>상품 추가</button>
            </form>

            <div style={{backgroundColor : "var(--color-line)"}}>
            <hr />
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
            <span className="table" style={{width: "5%"}}>수정/삭제</span>
            <span className="table">|</span>
            <hr />
            </div>
            <div className="ProductDataTable">
                {products.map((element) => (
                    <Product key={element.id} id={element.id} name={element.name} picture={element.picture}
                             price={element.price} count={element.count} information={element.information}
                             categoryName={element.category_name}/>
                ))}
            </div>
        </div>
    );
}

export default ManageProductPage;