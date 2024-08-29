import Header from 'header/Header';
import React, { useEffect, useState } from 'react';
import AlarmMark from './component/AlarmMark';
import "alarm/AlarmList.css"
import AlarmHistory from './component/AlarmHistory';
import AlarmDetailModal from 'alarm/component/AlarmDetailModal.js'

function AlarmList(props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setIsOpen(false);
    }
    useEffect(()=>{
        document.body.classList.toggle("unscrollable",isOpen)
    },[isOpen]);

    return (
        <div className='alarmList-container'>
            <Header/>
            <AlarmMark handleOpenModal={handleOpenModal}/>
            <AlarmHistory handleOpenModal={handleOpenModal}/>
            <AlarmDetailModal isOpen={isOpen} closeModal={closeModal}/>
        </div>
    );
}

export default AlarmList;