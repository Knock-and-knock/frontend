import React from 'react';
import "home/component/CardSection.css"

function CardSection(props) {
    return (
        <div className='cardSection-container'>
            <p>카드</p>
            <div>
                <p>이번달 사용금액</p>
                <p>177,400원</p>
                <p>신한은행 Life Care(1234)</p>
                
            </div>
        </div>
    );
}

export default CardSection;