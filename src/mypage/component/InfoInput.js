import React from 'react';

function InfoInput(props) {
    return (
        <div className='infoInput-container'>
            <div>
                <p>생년월일</p>
                <input type='text' placeholder='1950.01.01'/>
            </div>
            <div>
                <p>성별</p>
                <input type='text'placeholder='남'/>
            </div>
            <div>
                <p>키</p>
                <input type='number'placeholder='175'/>
            </div>
            <div>
                <p>몸무게</p>
                <input type='number' placeholder='75'/>
            </div>
            <div>
                <p>질병</p>
                <input type='text'placeholder='감기'/>
            </div>
            <div>
                <p>주소</p>
                <input type='text' placeholder='경기도 과천시 별양로 66-11'/>
                <input type='text' placeholder='347동 1002호'/>
            </div>
            <div>
                <p>이메일</p>
                <input type='email' placeholder='qwer1234@naver.com'/>
            </div>
            
        </div>
    );
}

export default InfoInput;