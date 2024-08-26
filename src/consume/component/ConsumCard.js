import React, { useState } from 'react';
import "consume/component/ConsumCard.css";
import shinhancard from "image/shinhancard.png"

function ConsumCard(props) {

    return (
        <div className='consumCard-contaienr'>
            <img className='shinhancard-image' src={shinhancard} alt='신한카드'></img>
        </div>
    );
}

export default ConsumCard;