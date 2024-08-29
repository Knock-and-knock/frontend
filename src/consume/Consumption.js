 import "consume/Consumption.css";
import Header from 'header/Header';
import { useEffect, useState } from 'react';
import ConsumCard from "./component/ConsumCard";
import ConsumDetailModal from './component/ConsumDetailModal';
import ConsumFilter from './component/ConsumFilter';
import ConsumList from './component/ConsumList';
import { call } from "login/service/ApiService";

function Consumption({cardId}) {
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

    const [consumList, setConsumList] = useState([]);

    useEffect(()=>{
        call('/api/v1/card-history',"GET",{cardId}).then((response)=>{
            console.log(response);
            setConsumList(response);
        }).catch((error)=>{
            console.log(error);
        });
    },[cardId]);
    
    return (
        <div>
            <Header/>
            <div className="consumption-container">
                <ConsumCard/>
                <ConsumFilter consumList={consumList}/>
                <ConsumList handleOpenModal={handleOpenModal} consumList={consumList}/>  
                <ConsumDetailModal isOpen={isOpen} closeModal={closeModal}/>
            </div>
        </div>
    );
}

export default Consumption;