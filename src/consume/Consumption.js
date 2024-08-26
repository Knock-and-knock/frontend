import Header from 'header/Header';
import React, { useEffect, useState } from 'react';
import ConsumList from './component/ConsumList';
import "consume/Consumption.css";
import ConsumFilter from './component/ConsumFilter';
import ConsumDate from './component/ConsumDate';
import ConsumCard from './component/ConsumCard';
import ConsumDetailModal from './component/ConsumDetailModal';

function Consumption(props) {
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
        <div>
            <Header/>
            <div className="consumption-container">
                {/* <ConsumDate/> */}
                <ConsumCard/>
                <ConsumFilter/>
                <ConsumList handleOpenModal={handleOpenModal}/>
                
                <ConsumDetailModal isOpen={isOpen} closeModal={closeModal}/>
            </div>
        </div>
    );
}

export default Consumption;