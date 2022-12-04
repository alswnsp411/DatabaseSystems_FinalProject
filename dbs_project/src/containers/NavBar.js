import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="nav_bar">
            <div className="search">
                <input type="text" className="search_input" placeholder="검색어를 입력하세요." />
                <button>검색</button>
            </div>
            <div className="menu">
                <span className="menu_link">로그인</span>
                <span className="menu_link">회원가입</span>
                <span className="menu_link">관리자 로그인</span>
                <span className="menu_link">장바구니</span>
                <span className="menu_link">주문목록</span>


            </div>
        </div>
    );
}

export default NavBar;