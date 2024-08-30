import "home/component/CardSection.css";
import card from "image/home-card.png";
import { call } from "login/service/ApiService";
import { useEffect, useState } from "react";

function CardSection({cardlist}) {
    const cardNo = cardlist?.cardNo || '0000';
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=>{
        call(`/api/v1/card/${cardlist.cardID}`,"GET",null).then((res)=>{
            setTotalAmount(res.totalAmount);
        }).catch((error)=>{
            
        });
    },[]);
    return (
       
        <div className='cardSection-container'> 
            <p className='cardSection-title'>카드</p>
            <div className='cardSection-content'>
                <div>
                    <div className='cardSection-price'>
                        <p>이번달 사용금액</p>
                        <p>{totalAmount}원</p>
                    </div> 
                    <p className='cardSection-cardName'>{cardlist.cardBank} Life Care({cardNo.slice(-4)})</p> 
                </div>
                <img src={card} alt="카드" className="creditCard" />           
            </div>
        </div>
       
    );
}

export default CardSection;