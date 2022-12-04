import React, {useEffect} from 'react';
import './NavBar.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../_features/userSlice";

function NavBar() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (user) {  //로그인이 되어있는 상태: 로그아웃
            navigate('/');
            dispatch(logout());
        }
    }
    const handleLogIn = () => {
        if (!user) {
            alert('로그인이 필요합니다.');
        }
    }

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
                <Link to={!user && '/login'}>
                    <span className="menu_link" onClick={handleLogout}>{user ? '로그아웃' : '로그인하기'}</span>
                </Link>
                <Link to='/register'>
                    <span className="menu_link">회원가입</span>
                </Link>
                <Link to='/manager'>
                    <span className="menu_link">관리자 로그인</span>
                </Link>
                <Link to={user && '/my_cart'}>
                    <span className="menu_link" onClick={handleLogIn}>장바구니</span>
                </Link>
                <Link to={user && '/order_list'}>
                    <span className="menu_link" onClick={handleLogIn}>주문목록</span>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;