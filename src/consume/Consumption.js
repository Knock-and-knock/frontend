import React, { useEffect, useState } from 'react';
import Header from 'header/Header';
import ConsumCard from "./component/ConsumCard";
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumDateModal from './component/ConsumDateModal';
import ConsumFilter from './component/ConsumFilter';
import ConsumList from './component/ConsumList';
import { call } from "login/service/ApiService";

function Consumption({ cardId }) {
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    const [isOpenDate, setIsOpenDate] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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

    useEffect(() => {
        call('/api/v1/card-history', "GET", { cardId }).then((response) => {
            setConsumList(response);
        }).catch((error) => {
            console.log(error);
        });
    }, [cardId]);

    return (
        <div>
            <Header />
            <div className="consumption-container">
                <ConsumCard />
                <ConsumFilter handleOpenModal={handleOpenDateModal} startDate={startDate} endDate={endDate} />
                <ConsumList handleOpenModal={handleOpenDetailModal} consumList={consumList} />
                <ConsumDetailModal isOpen={isOpenDetail} closeModal={closeDetailModal} />
                <ConsumDateModal isOpen={isOpenDate} closeModal={closeDateModal} updateDates={updateDates} />
            </div>
        </div>
    );
}

export default Consumption;
