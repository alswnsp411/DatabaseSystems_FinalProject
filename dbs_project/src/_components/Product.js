import React from 'react';
import './Table.css';

function Product(props) {
    const UpdateProduct = () => {

    }
    const DeleteProduct = () => {

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
            <span className="table" style={{width: "5%"}}>{props.price}원</span>
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