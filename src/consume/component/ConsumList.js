import React from 'react';
import "consume/component/ConsumList.css";

function ConsumList({handleOpenModal}) {
    return (
        <div className='consumList-container' onClick={handleOpenModal}>
            <p className='consumList-date'>2024.08.06</p>
            <div className='consumList-box'>
                <p className='consumList-time'>13:20 <span>개인</span></p>
                <div className='consumList-content'>
                    <p>GS25 편의점결제<span className='payment-cancel'>거래취소</span></p> 
                    <p>6,000</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>13:20 <span>개인</span></p>
                <div className='consumList-content'>
                    <p>GS25 편의점결제<span className='payment-cancel'>거래취소</span></p> 
                    <p>6,000</p>
                </div>
            </div>
            <div className='consumList-box'>
                <p className='consumList-time'>13:20 <span>개인</span></p>
                <div className='consumList-content'>
                    <p className=''>GS25 편의점결제<span className='payment-cancel'>거래취소</span></p> 
                    <p>6,000</p>
                </div>
            </div>
            
        </div>
    );
}

export default ConsumList;