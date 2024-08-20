import { useEffect, useRef, useState } from 'react';
import LoginBtn from './component/button/LoginBtn';
import LoginHeader from './component/header/LoginHeader';

function LoginPw(props) {
    const [pw,setPw] =useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleChange = (e) => {
        const value = e.target.value.slice(0, 6);
        setPw(value);
    };
    const circles = Array(6).fill(null); 

    return (
        <div>
            <LoginHeader/>
            <div className="login-container"> 
                <div className='circle-wrap'>          
                    {circles.map((_, index) => (
                        <div key={index}

                        className={`small-circle ${pw.length > index ? 'filled' : ''}`}>
                            
                        </div>
                    ))}
                </div>               
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
            />
            <LoginBtn/>
        </div>
    );
}

export default LoginPw;