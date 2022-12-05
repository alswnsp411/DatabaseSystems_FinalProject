import React from 'react';
import axios from "axios";
import {useSelector} from "react-redux";
import {selectUser} from "../_features/userSlice";

function OrderProduct(props) {
    const user= useSelector(selectUser);

    const PutProduct = async (e) => {
        e.preventDefault();
        console.log(user);

        const putForm = new FormData();
        putForm.append("uid",user.uid);
        putForm.append("pid",props.id);
        try{
            await axios(
                {
                    method : "POST",
                    url : "http://localhost:3000/dbs_project/addShoppingBasket.php",
                    data : putForm,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
            alert(`${props.name}을 장바구니에 담았습니다.`);
        }catch(error){
            console.log(error);
        }
    }
    const OrderProduct = () => {
    }

    return (
        <div className="product">
            <span className="table">|</span>
            <span className="table" style={{width: "1%"}}>{props.id}</span>
            <span className="table">|</span>
            <span className="table" style={{width: "10%"}}>{props.name}</span>
            <span className="table">|</span>
            <span className="table" style={{width: "10%"}}>{props.picture}</span>
            <span className="table">|</span>
            <span className="table" style={{width: "6%"}}>{props.price}원</span>
            <span className="table">|</span>
            <span className="table" style={{width: "5%"}}>{props.count}개</span>
            <span className="table">|</span>
            <span className="table" style={{width: "25%"}}>{props.information}</span>
            <span className="table">|</span>
            <button onClick={PutProduct}>장바구니에 담기</button>
            <button onClick={OrderProduct}>주문하기</button>
            <hr/>
        </div>
    );
}

export default OrderProduct;