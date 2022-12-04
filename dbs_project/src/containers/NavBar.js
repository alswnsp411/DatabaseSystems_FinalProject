import React from 'react';
import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="nav_bar">
            <Link to='/'>
                <span className="menu_link">DatabaseSystems</span>
            </Link>
            <div className="search">
                <input type="text" className="search_input" placeholder="검색어를 입력하세요."/>
                <button>검색</button>
            </div>
            <div className="menu">
                <Link to='/login'>
                    <span className="menu_link">로그인</span>
                </Link>
                <Link to='/register'>
                    <span className="menu_link">회원가입</span>
                </Link>
                <Link to='/manager'>
                    <span className="menu_link">관리자 로그인</span>
                </Link>
                <Link to='/my_cart'>
                    <span className="menu_link">장바구니</span>
                </Link>
                <Link to='/order_list'>
                    <span className="menu_link">주문목록</span>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;