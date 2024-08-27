import React, { useEffect, useState } from 'react';
import "consume/component/ConsumList.css";
import { call } from 'login/service/ApiService';

function ConsumList({handleOpenModal}) {
    const [consumList, setConsumList] = useState([]);

    useEffect(()=>{
        call('/api/v1/card-history',"GET",null).then((response)=>{
            console.log(response);
            setConsumList(response);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    function formatDate(dateString) {
        const date = new Date(dateString);
    
        const year = date.getFullYear(); // 연도
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 +1 필요)
        const day = String(date.getDate()).padStart(2, '0'); // 일
    
        return `${year}. ${month}. ${day}`;
    }

    return (

    <div>
        {consumList.map((consumlist, index) => (
            <div key={index} className='consumList-container' onClick={handleOpenModal}>
                <p className='consumList-date'>{formatDate(consumlist.cardHistoryApprove)}</p>
                <div className='consumList-box'>
                    <p className='consumList-time'>21:00 <span>{consumlist.cardFamily ? "가족" : "개인"}</span></p>
                    <div className='consumList-content'>
                        <p>{consumlist.cardHistoryShopname}<span className='payment-cancel'>거래취소</span></p> 
                        <p>{consumlist.cardHistoryAmount}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>

       
    );
}

export default ConsumList;