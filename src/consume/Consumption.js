import "consume/Consumption.css";
import Header from 'header/Header';
import { call } from "login/service/ApiService";
import { useEffect, useState } from 'react';
import ConsumCard from "./component/ConsumCard";
import ConsumDateModal from './component/ConsumDateModal';
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumList from './component/ConsumList';

function Consumption() {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [cardlist, setCardList] = useState([]);
    const [consumList, setConsumList] = useState([]);
    const [selectedCardId, setSelectedCardId] = useState(null);

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
        call('/api/v1/card', "GET", null)
            .then((response) => setCardList(response))
            .catch(() => alert("카드 조회 실패"));
    }, []);

    return (
        <div>
            <Header />
            <div className="consumption-container">
                <ConsumCard 
                    cardlist={cardlist}
                    handleOpenModal={handleOpenDateModal}
                    startDate={startDate}
                    endDate={endDate}
                />
                <ConsumList 
                    handleOpenModal={handleOpenDetailModal}
                    consumList={consumList} 
                />
                <ConsumDetailModal 
                    isOpen={isOpenDetail} 
                    closeModal={closeDetailModal} 
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