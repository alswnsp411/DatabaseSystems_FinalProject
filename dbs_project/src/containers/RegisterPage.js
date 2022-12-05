import React, {useState} from 'react';
import NavBar from "./NavBar";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [payment, setPayment] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();

        const reigster = new FormData();
        reigster.append("email",email);
        reigster.append("password",password);
        reigster.append("name",name);
        reigster.append("phoneNumber",phoneNumber);
        reigster.append("payment",payment);
        reigster.append("address",address);
        try{
            await axios(
                {
                    method : "POST",
                    url : "dbs_project/register.php",
                    data : reigster,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
            navigate('/login');
            alert(`${name}님 환영합니다 ~`);
        }catch(error){
            console.log(error);
        }

        const basketForm = new FormData();
        basketForm.append("email",email);
        reigster.append("password",password);
        reigster.append("name",name);
        reigster.append("phoneNumber",phoneNumber);
        reigster.append("payment",payment);
        reigster.append("address",address);
        try{
            await axios(
                {
                    method : "POST",
                    url : "dbs_project/register.php",
                    data : reigster,
                    headers : {"Content-Type" : "multipart/form-data",},
                });
            navigate('/login');
            alert(`${name}님 환영합니다 ~`);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="RegisterPage">
            <NavBar/>
            <form>
                <p>이메일</p>
                <input type="text" placeholder="이메일"
                       value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <p>이름</p>
                <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
                <p>전화번호</p>
                <input type="text" placeholder="전화번호"
                       value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <p>결제수단</p>
                <input type="text" placeholder="결제수단"
                       value={payment} onChange={(e) => setPayment(e.target.value)}/>
                <p>주소</p>
                <input type="text" placeholder="주소"
                       value={address} onChange={(e) => setAddress(e.target.value)}/>
                <p></p>
                <button className="login_sign_in_button" type="submit" onClick={handleRegister}>회원가입하기</button>
            </form>
        </div>
    );
}

export default RegisterPage;