import "consume/component/ConsumFilter.css";
import { useState } from 'react';

function ConsumFilter(props) {
    const [selectedTpe, setSelectedType] = useState('individual'); // 기본값을 'individual'로 설정
    const handleTypeClick = (type) => {
        setSelectedType(type);
    }
    return (
        <div className='filter-content'>
            <p className='filter-price'>총 <span className='priceNum'>231,500</span> 원</p>
            <ul className='filter-type'>
                {/* '개인'이 기본으로 선택된 상태 */}
                <li onClick={() => handleTypeClick('individual')} className={selectedTpe === 'individual' ? 'selected' : ''}>개인</li>
                <li onClick={() => handleTypeClick('family')} className={selectedTpe === 'family' ? 'selected' : ''}>가족</li>
            </ul>
        </div>
    );
}

export default ConsumFilter;
