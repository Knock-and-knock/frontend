import React from 'react';
import "home/component/CardBottom.css"
import { useNavigate } from 'react-router-dom';

function CardBottom({isProtege,cardlist, cardId}) {
    const navi = useNavigate();

    return (
        <div className={`cardBottom-container ${!isProtege ? 'blue-bottom' : ''}`}>
            <p className="cardBottom-separator" onClick={()=>navi('/consumption' ,{state:{value:cardId}} )}>카드내역</p>
            {!cardlist.cardIsFamily?<p className="cardBottom-separator" onClick={()=>navi('/cardapp/fdefaultinfo')}>가족카드 발급</p>:""}
            <p onClick={()=>navi('/consume-report',{state:{value:cardId}} )}>소비리포트</p>
        </div>
    );
}


export default CardBottom;