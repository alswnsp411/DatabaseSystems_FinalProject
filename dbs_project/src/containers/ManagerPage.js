import React from 'react';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";

function ManagerPage() {
    return (
        <div className="ManagerPage">
            <NavBar/>
            <div>
                <Link to='/manager/product' >
                    <h2>상품 관리</h2>
                    {/*상품 조회, 추가, 삭제, 수정*/}
                </Link>
                <Link to='/manager/customer' >
                    <h2>회원 관리</h2>
                    {/*회원 조회, 추가, 삭제, 수정*/}
                </Link>
                <Link to='/manager/order' >
                    <h2>주문 관리</h2>
                    {/*주문 조회, 추가, 삭제, 수정*/}
                </Link>
            </div>
        </div>
    );
}

export default ManagerPage;