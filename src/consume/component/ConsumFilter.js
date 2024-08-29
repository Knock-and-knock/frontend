import "consume/component/ConsumFilter.css";
import { useEffect, useState } from "react";

function ConsumFilter({consumList}) {
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
                <p>2024.08.01 ~ 2024.08.06</p>
                <button className="filterBtn">기간설정</button>
            </div>
            <div className="filter-totalPrice">
                <p className='filter-price'>총 이용금액</p>
                <p className='filter-num'>231,500 원</p>
            </div>
            {/* <ConsumFilter isOpen={isOpen} closeModal={closeModal}/> */}

        </div>
    );
}

export default ConsumFilter;
