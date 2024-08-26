import "consume/Consumption.css";
import Header from 'header/Header';
import { useEffect, useState } from 'react';
import ConsumCard from "./component/ConsumCard";
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumFilter from './component/ConsumFilter';
import ConsumList from './component/ConsumList';

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
                <ConsumCard/>
                <ConsumFilter/>
                <ConsumList handleOpenModal={handleOpenModal}/>
                
                <ConsumDetailModal isOpen={isOpen} closeModal={closeModal}/>
            </div>
        </div>
    );
}

export default Consumption;