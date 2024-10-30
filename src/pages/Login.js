
import React, { useState } from "react"
import '../css/login.css';

function Login(){
    const [loginInput, setLoginInput] = useState({
        id : "",
        password : "",
    });
    
    function handleInputChange(field, event){
        setLoginInput((prevState) => ({
            ...prevState,
            [field]: event.target.value,
        }));
    }

    function handleSubmit(event){
        event.preventDefault(); //일단 섭밋하지말고
        console.log(loginInput);
    }

    return (
        <div className="login-conntent">
            <form onSubmit={handleSubmit}>
                <h2>로그인</h2>
                
                <h3>아이디</h3>
                <input type="text" id="login-id" className="form-control" onChange={(event) => handleInputChange("id", event)} value={loginInput.id}>

                </input>

                <h3>비밀번호</h3>
                <input type="password" id="login-password" className="form-control" onChange={(event) => handleInputChange("password", event)} value={loginInput.password}>
                </input>
                <br></br><br></br>
                <button className="btn btn-primary" type="submmit">로그인하기</button>
            </form>
        </div>
        );
        
}
export default Login;
