import "consume/component/ConsumFilter.css";
import { useEffect, useState } from "react";

function ConsumFilter({startDate,endDate,handleOpenModal}) {
    // const [isOpen, setIsOpen] = useState(false);
    // const handleOpenModal = () => {
    //     setIsOpen(true);
    // };
    
    // const closeModal = () => {
    //     setIsOpen(false);
    // }
    // useEffect(()=>{
    //     document.body.classList.toggle("unscrollable",isOpen)
    // },[isOpen]);
    return (
        <div className='filter-content'>
            <div className="filter-date">
                <p>{startDate && endDate ? `${startDate} ~ ${endDate}` : '날짜 선택'}</p>
                <button onClick={handleOpenModal} className="filterBtn">기간설정</button>
            </div>
            <div className="filter-totalPrice">
                <p className='filter-price'>총 이용금액</p>
                <p className='filter-num'>231,500 원</p>
            </div>
        </div>
    );
}

export default ConsumFilter;
