import React, {useState} from 'react';
import NavBar from "./NavBar";
import axios from "axios";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const login = new FormData();
        login.append("email", email);
        try {
            const response=await axios(
                {
                    method: "POST",
                    url: "dbs_project/login.php",
                    data: login,
                    headers: {"Content-Type": "multipart/form-data",},
                }
            );
            const user_password=response.data.password;
            if(password==user_password){
                alert("로그인 성공");
            }else{
                alert("비밀번호를 확인해주세요");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="LoginPage">
            <NavBar/>
            <form>
                <p>이메일</p>
                <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p>비밀번호</p>
                <input type="password" placeholder="비밀번호" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button className="login_sign_in_button" type="submit" onClick={handleLogin}>로그인하기</button>
            </form>
        </div>
    );
}

export default LoginPage;