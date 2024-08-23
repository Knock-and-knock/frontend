import "consume/component/ConsumFilter.css";
import { useState } from 'react';

function ConsumFilter(props) {
    const [selectedTpe, setSelectedType] = useState('all');
    const handleTypeClick=(type)=>{
        setSelectedType(type);
    }
    return (
        <div className='filter-content'>
            <p className='filter-price'>총 <span className='priceNum'>177,400</span>원</p>
            <ul className='filter-type'>
                <li onClick={()=>handleTypeClick('all')} className={selectedTpe==='all'?'selected':''}>전체</li>
                <li onClick={()=>handleTypeClick('individual')} className={selectedTpe==='individual'?'selected':''}>개인</li>
                <li onClick={()=>handleTypeClick('family')} className={selectedTpe==='family'?'selected':''}>가족</li>
            </ul>
        </div>
);
}

export default ConsumFilter;