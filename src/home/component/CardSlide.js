import CardBottom from 'home/component/CardBottom';
import CardSection from 'home/component/CardSection';
import "home/component/CardSlide.css";
import next from "image/icon/icon-next.png";
import pre from "image/icon/icon-pre.png";
import { call } from 'login/service/ApiService';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function CardSlide({isProtege}) {
    const userNo = localStorage.getItem("userNo");
    const [cardList, setCardList] = useState([]);
    const [isCard, setIsCard] = useState(true);


    useEffect(()=>{
        call(`/api/v1/card/${userNo}`,"GET",null).then((response)=>{
            if(response.length === 0){
                setIsCard(false);
            }else{      
                setCardList(response);
            }
            
        }).catch((error)=>{
            alert("카드조회 실패");
    });
    },[userNo]);

    return (
        <Swiper 
        modules={[Navigation]}
        navigation={{
            prevEl: '.preBtn',
            nextEl: '.nextBtn',
        }}
        slidesPerView={1} 
        >

        {cardList.map((cardlist, index)=>(
            <SwiperSlide key={index}>
                {isCard?<CardSection cardlist={cardlist}/>:""}
                <CardBottom isProtege={isProtege}/>
            </SwiperSlide>
        ))}
        <div className="preBtn" >
                <img src={pre} alt="카드 이전 버튼" />
        </div>
        <div className="nextBtn" >
            <img src={next} alt="카드 다음 버튼" />
        </div>

        </Swiper>
    );
}

export default CardSlide;