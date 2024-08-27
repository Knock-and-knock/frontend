import React from 'react';
import "home/component/CardBottom.css"
import { useNavigate } from 'react-router-dom';

function CardBottom(props) {
    const navi = useNavigate();

    return (
        <div className='cardBottom-container'>
            <p onClick={()=>navi('/consumption')}>카드내역</p>
            <p onClick={()=>navi('/cardapp/fdefaultinfo')}>가족카드 발급</p>
            <p onClick={()=>navi('/consume-report')}>소비리포트</p>
        </div>
    );
}

export default CardBottom;