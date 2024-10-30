
import React, { useState } from "react"
import '../css/register.css'

function Register(){
    const [registerInput, setRegisterInput] = useState({
        nickname : "",
        email : "",
        id : "", 
        password : "",
        confirmPassword : "",
    });
    
    function handleRegisterInputChange(field, event){
        setRegisterInput((prevState) => ({
            ...prevState,
            [field]: event.target.value,
        }));
    }

    function handleRegisterSubmit(event){
        event.preventDefault(); //일단 섭밋하지말고
        console.log(registerInput);
    }

    return (
        <div className="register-conntent">
            <form onSubmit={handleRegisterSubmit}>
                <h2>회원가입</h2>
                
                <h3>사용할 닉네임</h3>
                <input type="text" id="register-nickname" className="form-control" 
                onChange={(event) => handleRegisterInputChange("nickname", event)} 
                value={registerInput.nickname}>
                </input>

                <h3>이메일</h3>
                <input type="email" id="register-email" className="form-control" 
                onChange={(event) => handleRegisterInputChange("email", event)} 
                value={registerInput.email}>
                </input>

                <h3>아이디</h3>
                <input type="text" id="register-id" className="form-control" 
                onChange={(event) => handleRegisterInputChange("id", event)} 
                value={registerInput.id}>
                </input>

                <h3>비밀번호</h3>
                <input type="password" id="register-password" className="form-control" 
                onChange={(event) => handleRegisterInputChange("password", event)} 
                value={registerInput.password}>
                </input>

                <h3>비밀번호확인</h3>
                <input type="password" id="register-confirm-password" className="form-control" 
                onChange={(event) => handleRegisterInputChange("confirmPassword", event)} 
                value={registerInput.confirmPassword}>
                </input>

                <br></br><br></br>

                <button className="btn btn-primary" type="submmit">회원가입하기</button>
            </form>
        </div>
        );
}
export default Register;
