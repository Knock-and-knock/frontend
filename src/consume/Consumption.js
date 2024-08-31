import "consume/Consumption.css";
import Header from 'header/Header';
import { call } from "login/service/ApiService";
import { useEffect, useState } from 'react';
import ConsumCard from "./component/ConsumCard";
import ConsumDateModal from './component/ConsumDateModal';
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumList from './component/ConsumList';
import { useLocation } from "react-router-dom";

function Consumption() {
    const location = useLocation();
    const cardList = location.state.value;
;
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [consumList, setConsumList] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);

    const getStartOfMonth = () => {
        const today = new Date();
        const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        return firstDayOfNextMonth.toISOString().split('T')[0];
    };

    const getEndOfMonth = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const updateDates = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handleOpenDetailModal = () => setIsOpenDetail(true);
    const handleOpenDateModal = (cardId) => {
        setSelectedCardId(cardId);
        setIsOpenDate(true);
    };
    const closeDetailModal = () => setIsOpenDetail(false);
    const closeDateModal = () => setIsOpenDate(false);

    useEffect(() => {
        document.body.classList.toggle("unscrollable", isOpenDetail || isOpenDate);
    }, [isOpenDetail, isOpenDate]);

    useEffect(() => {
        const start = getStartOfMonth();
        const end = getEndOfMonth();
        setStartDate(start);
        setEndDate(end);

        call('/api/v1/card-history', "GET", {
            cardId: cardList.cardId, 
            startDate: start, 
            endDate: end
        })
        .then((response) => setConsumList(response))
        .catch(() => alert("내역 조회 실패"));

    }, [cardList.cardId]);

    // 총 이용금액 계산
    const calculateTotalAmount = () => {
        return consumList.reduce((total, item) => total + item.cardHistoryAmount, 0);
    };
    return (
        <div>
            <Header />
            <div className="consumption-container">
                <ConsumCard 
                    cardlist={cardList}
                    handleOpenModal={handleOpenDateModal}
                    startDate={startDate}
                    endDate={endDate}
                    totalAmount={calculateTotalAmount()}
                />
                <ConsumList 
                    handleOpenModal={handleOpenDetailModal}
                    consumList={consumList} 
                /> 
                <ConsumDetailModal 
                    isOpen={isOpenDetail} 
                    closeModal={closeDetailModal} 
                    consumList={consumList} 
                />
                <ConsumDateModal 
                    setConsumList={setConsumList} 
                    isOpen={isOpenDate} 
                    closeModal={closeDateModal} 
                    updateDates={updateDates} 
                    cardId={selectedCardId} 
                />
            </div>
        </div>
    );
}

export default Consumption;