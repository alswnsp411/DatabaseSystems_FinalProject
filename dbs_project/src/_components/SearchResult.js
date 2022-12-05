import React from 'react';

function SearchResult(props) {
    const PutProduct = () => {

    }
    const OrderProduct = () => {
    }

    return (
        <div className="SearchResult">
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
            <button onClick={PutProduct}>장바구니에 담기</button>
            <button onClick={OrderProduct}>주문하기</button>
            <hr/>
        </div>
    );
}

export default SearchResult;