import React, { useState, useEffect } from 'react';
import "consume/component/ConsumList.css";
import { call } from 'login/service/ApiService';

function ConsumList({ setIsOpenDetail, setCardDetail, consumList }) {
    const [displayedConsumList, setDisplayedConsumList] = useState([]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}. ${month}. ${day}`;
    }

    // 모달을 열고 선택한 카드의 상세 정보를 설정하는 함수
    const handleOpenDetailModal = (cardHistoryNo) => {
        call(`/api/v1/card-history/${cardHistoryNo}`)
                .then((response) => setCardDetail(response))
                .catch(() => alert("카드 상세 조회 실패"));
        setIsOpenDetail(true); // 모달 열기
    };

    useEffect(() => {
        let previousDate = '';
        const updatedList = consumList.map((consum) => {
            const currentDate = formatDate(consum.cardHistoryApprove);
            const showDate = currentDate !== previousDate;
            previousDate = currentDate;
            return { ...consum, showDate };
        });
        setDisplayedConsumList(updatedList);
    }, [consumList]);

    return (
        <div>
            {displayedConsumList.map((consum, index) => (
                <div key={index} className='consumList-container' onClick={() => handleOpenDetailModal(consum.cardHistoryNo)}>
                    {consum.showDate && <p className='consumList-date'>{formatDate(consum.cardHistoryApprove)}</p>}
                    <div className='consumList-box'>
                        <p className='consumList-time'>21:00 <span>{consum.cardFamily ? "가족" : "개인"}</span></p>
                        <div className='consumList-content'>
                            <p>{consum.cardHistoryShopname}{consum.cardHistoryIsCansle ? <span className='payment-cancel'>거래취소</span> : ""}</p>
                            <p>{consum.cardHistoryAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ConsumList;