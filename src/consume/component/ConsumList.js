import React from 'react';
import "consume/component/ConsumList.css";

function ConsumList({handleOpenModal}) {
    return (
        <div className='consumList-container' onClick={handleOpenModal}>
            <p className='consumList-date'>2024.08.24</p>
            {/* <div className='consumList-box'>
                <p className='consumList-time'>21:00 <span>개인</span></p>
                <div className='consumList-content'>
                    <p>헌팅포차<span className='payment-cancel'>거래취소</span></p> 
                    <p>6,000</p>
                </div>
            </div> */}
            <div className='consumList-box'>
                <p className='consumList-time'>21:00 <span>개인</span></p>
                <div className='consumList-content'>
                    <p>헌팅포차<span className='payment-cancel'></span></p> 
                    <p>29,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>19:00 <span>개인</span></p>
                <div className='consumList-content'>
                    <p>희동이의 가방나라<span className='payment-cancel'></span></p> 
                    <p>38,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>18:20 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>롯데 백화점<span className='payment-cancel'></span></p> 
                    <p>29,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>17:50 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>밍교 찜닭<span className='payment-cancel'></span></p> 
                    <p>17,000</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>17:30 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>송금<span className='payment-cancel'></span></p> 
                    <p>9,900</p>
                </div>
            </div>
            
            <p className='consumList-date'>2024.08.23</p>
            <div className='consumList-box'>
                <p className='consumList-time'>13:00 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>대횬 철물<span className='payment-cancel'>거래취소</span></p> 
                    <p>15,000</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>12:30 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>성진 설렁탕<span className='payment-cancel'></span></p> 
                    <p>10,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>11:00 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>개인 택시<span className='payment-cancel'></span></p> 
                    <p>18,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>10:30 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>다이소<span className='payment-cancel'></span></p> 
                    <p>30,900</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>09:30 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>두리 이비인후과<span className='payment-cancel'></span></p> 
                    <p>44,200</p>
                </div>
            </div>

        </div>
    );
}

export default ConsumList;