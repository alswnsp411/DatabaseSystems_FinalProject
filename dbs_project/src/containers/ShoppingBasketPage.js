import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import {useSelector} from "react-redux";
import {selectUser} from "../_features/userSlice";
import axios from "axios";
import OrderProduct from "../_components/OrderProduct";

function ShoppingBasketPage() {
    const user= useSelector(selectUser);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice]= useState(0);

    useEffect(() => {
        async function fetchData() {
            const myShoppingBasketForm = new FormData();
            myShoppingBasketForm.append("uid", user.uid);
            try {
                const response = await axios(
                    {
                        method: "POST",
                        url: "http://localhost:3000/dbs_project/myShoppingBasket.php",
                        data: myShoppingBasketForm,
                        headers: {"Content-Type": "multipart/form-data",},
                    });
                setProducts(response.data);

                const totalPrice = await axios(
                    {
                        method: "POST",
                        url: "http://localhost:3000/dbs_project/totalPrice.php",
                        data: myShoppingBasketForm,
                        headers: {"Content-Type": "multipart/form-data",},
                    });
                setTotalPrice(totalPrice.data[0].total_price);
                console.log(totalPrice.data[0].total_price);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="ShoppingBasketPage">
            <NavBar/>
            {user.uname}의 장바구니
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
                <span className="table" style={{width: "15%"}}>장바구니에 담기/주문하기</span>
                <span className="table">|</span>
                <hr/>
            </div>
            <div className="ProductDataTable">
                {products.map((element) => (
                    <OrderProduct key={element.id} id={element.id} name={element.name} picture={element.picture}
                                  price={element.price} count={element.my_count} information={element.information}
                    />
                ))}
            </div>
            <div>
                총 금액 :  {totalPrice}원
            </div>

        </div>
    );
}

export default ShoppingBasketPage;