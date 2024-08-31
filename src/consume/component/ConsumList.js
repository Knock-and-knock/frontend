import React, { useState, useEffect } from 'react';
import "consume/component/ConsumList.css";

function ConsumList({ handleOpenModal, consumList }) {
    const [displayedConsumList, setDisplayedConsumList] = useState([]);

    function formatDate(dateString) {
        const date = new Date(dateString);

        const year = date.getFullYear(); // 연도
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 +1 필요)
        const day = String(date.getDate()).padStart(2, '0'); // 일

        return `${year}. ${month}. ${day}`;
    }

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
                <div key={index} className='consumList-container' onClick={handleOpenModal}>
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