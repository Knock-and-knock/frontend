import "consume/Consumption.css";
import Header from 'header/Header';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConsumCard from "./component/ConsumCard";
import ConsumDateModal from './component/ConsumDateModal';
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumFilter from './component/ConsumFilter';
import ConsumList from './component/ConsumList';

function Consumption() {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const location = useLocation();
    const cardId = location.state.value;

    const updateDates = (start, end) => {
        setStartDate(start);
        setEndDate(end);
    };

    const handleOpenDetailModal = () => {
        setIsOpenDetail(true);
    };

    const handleOpenDateModal = () => {
        setIsOpenDate(true);
    };

    const closeDetailModal = () => {
        setIsOpenDetail(false);
    };

    const closeDateModal = () => {
        setIsOpenDate(false);
    };

    useEffect(() => {
        document.body.classList.toggle("unscrollable", isOpenDetail || isOpenDate);
    }, [isOpenDetail, isOpenDate]);

    const [consumList, setConsumList] = useState([]);


    return (
        <div>
            <Header />
            <div className="consumption-container">
                <ConsumCard />
                <ConsumFilter handleOpenModal={handleOpenDateModal} startDate={startDate} endDate={endDate} cardId={cardId}/>
                <ConsumList handleOpenModal={handleOpenDetailModal} consumList={consumList} />
                <ConsumDetailModal isOpen={isOpenDetail} closeModal={closeDetailModal} />
                <ConsumDateModal setConsumList={setConsumList} isOpen={isOpenDate} closeModal={closeDateModal} updateDates={updateDates} cardId={cardId} />
            </div>
        </div>
    );
}

export default Consumption;
