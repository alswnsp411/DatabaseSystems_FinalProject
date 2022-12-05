import React from 'react';
import './Table.css';
import axios from "axios";
import {useLocation} from "react-router-dom";

function Product(props) {
    const location= useLocation();

    const UpdateProduct = () => {

    }
    const DeleteProduct = async (e) => {
        e.preventDefault();

        const deleteForm = new FormData();
        deleteForm.append("id", props.id);
        try {
            await axios(
                {
                    method: "POST",
                    url: "http://localhost:3000/dbs_project/deleteProduct.php",
                    data: deleteForm,
                    headers: {"Content-Type": "multipart/form-data",},
                }
            );
            alert(props.name +"삭제");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
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
            <span className="table" style={{width: "5%"}}>{props.categoryName}</span>
            <span className="table">|</span>
            <button onClick={UpdateProduct}>수정</button>
            <button onClick={DeleteProduct}>삭제</button>
            <hr />
        </div>
    );
}

export default Product;