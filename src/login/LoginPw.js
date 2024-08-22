import { useEffect, useRef, useState } from 'react';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';
import { call } from './service/ApiService';
import { useNavigate } from 'react-router-dom';

function LoginPw(props) {
    const [pw,setPw] =useState("");
    const inputRef = useRef(null);
    const loginUserNo = localStorage.getItem("userNo");
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    const [errorMessage, setErrorMessage] = useState("");
    const navi = useNavigate();
    const isButtonDisabled = pw.length < 6;

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleChange = (e) => {
        const value = e.target.value.slice(0, 6);
        setPw(value);
    };
    const circles = Array(6).fill(null); 
    const handleSubmit = (event)=>{
        event.preventDefault(); //default이벤트 취소
        const data = new FormData(event.target);
        const userSimplePassword = data.get("userSimplePassword");

        call('http://192.168.0.11:9090/api/v1/auth/login/simple',"POST",
            { userNo: loginUserNo, userSimplePassword: userSimplePassword}
        ).then((response)=>{
            console.log(response);
            localStorage.setItem(accessToken, response.accessToken);
            if(response.userType === "PROTECTOR"){
                navi("/nokmain")
            }else{
                navi("/main");
            }
            
        }).catch((error)=>{
            console.error("간편비밀번호로그인 실패", error);
            setErrorMessage(error.message);
        });
    };
    const handleCircleWrapClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div>
            <LoginHeader/>
            <form onSubmit={handleSubmit}>
                <div className="login-container"> 
                    <div className='circle-wrap' onClick={handleCircleWrapClick}>          
                        {circles.map((_, index) => (
                            <div key={index}

                            className={`small-circle ${pw.length > index ? 'filled' : ''}`}>
                                
                            </div>
                        ))}
                    </div>               
                    <div className='error-message'>{errorMessage}</div>
                </div>
                
                <input
                    ref={inputRef}
                    type="tel"
                    value={pw}
                    onChange={handleChange}
                    className="hidden-input"
                    style={{ 
                        opacity: 0, 
                        position: 'absolute', 
                        zIndex: -1 
                    }}
                    name='userSimplePassword'
                />
                <LoginBtn isButtonDisabled={isButtonDisabled}/>
            </form>
        </div>
    );
}

export default LoginPw;