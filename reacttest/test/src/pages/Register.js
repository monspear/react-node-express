
import React, { useState } from "react"
import '../css/register.css'

function Register(){
    const [registerInput, setRegisterInput] = useState({
        nickname : "",
        u_eamil : "",
        u_id : "", 
        u_password : "",
        u_checked_password : "",
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
        fetch("/Register",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(registerInput),
        }).then((res) => res.json())
        .then((res) => {
            console.log(res.status)
            if(!(res.success)){

                alert("제대로 가지 않았습니다.");
            }
        }).catch((err) => {
            console.error("회원가입 중 에러가 발생"+err);
        });
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
                onChange={(event) => handleRegisterInputChange("u_eamil", event)} 
                value={registerInput.u_eamil}>
                </input>

                <h3>아이디</h3>
                <input type="text" id="register-id" className="form-control" 
                onChange={(event) => handleRegisterInputChange("u_id", event)} 
                value={registerInput.u_id}>
                </input>

                <h3>비밀번호</h3>
                <input type="password" id="register-password" className="form-control" 
                onChange={(event) => handleRegisterInputChange("u_password", event)} 
                value={registerInput.u_password}>
                </input>

                <h3>비밀번호확인</h3>
                <input type="password" id="register-confirm-password" className="form-control" 
                onChange={(event) => handleRegisterInputChange("u_checked_password", event)} 
                value={registerInput.u_checked_password}>
                </input>

                <br></br><br></br>

                <button className="btn btn-primary" type="submmit">회원가입하기</button>
            </form>
        </div>
        );
}
export default Register;
