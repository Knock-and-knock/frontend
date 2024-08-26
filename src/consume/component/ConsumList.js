import React, { useEffect, useState } from 'react';
import "consume/component/ConsumList.css";
import { call } from 'login/service/ApiService';

function ConsumList({handleOpenModal}) {
    const [consumList, setConsumList] = useState('');

    useEffect(()=>{
        call('/api/v1/card-history',"GET",null).then((response)=>{
            console.log(response);
            setConsumList(response);
        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    return (
        <div className='consumList-container' onClick={handleOpenModal}>
            {/* <p className='consumList-date'>{consumList[1].cardHistoryApprove}</p>
            <div className='consumList-box'>
                <p className='consumList-time'>21:00 <span>{consumList[1].cardFamily?"가족":"개인"}</span></p>
                <div className='consumList-content'>
                    <p>{consumList[1].cardHistoryShopname}<span className='payment-cancel'>거래취소</span></p> 
                    <p>{consumList[1].cardHistoryAmount}</p>
                </div>
            </div>  */}

        </div>
    );
}

export default ConsumList;