import Header from 'header/Header';
import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'welfare/css/WelfarePay.css';
import cardP from "image/personalCard3.png";
import cardF from "image/familyCard3.png";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

function WelfarePay(props) {
    const [cardId, setCardId] = useState(null);
    const [cardList, setCardList] = useState([]);
    const [cardNo, setCardNo] = useState('');

    const [errorMsg,setErrorMsg] = useState('');
    const navi = useNavigate();

    useEffect(() => {
        call('/api/v1/card', "GET", null)
            .then(response => {
                if(response.length>0){
                setCardList(response);
                
                const firstCard = response[0];
                setCardId(firstCard.cardId);
                setCardNo(firstCard.cardNo)
                }
                
            })
            .catch(error => {
                setErrorMsg("카드 조회에 실패했습니다.");
            });
    }, []);

    const handleGoCheckPW = () => {
        if (cardId) {
            call('/api/v1/users/payment',"GET",null).then((response)=>{
                if(response.result){
                    navi('/welfare-input/welfare-check-pw', { state: { value: cardId } });
                }else{
                    navi('/welfare-input/welfare-set-pw', { state: { value: cardId } });
                }
            }).catch((error)=>{
                setErrorMsg("결제에 실패했습니다.");
            });
            
        } else {
            setErrorMsg("카드를 선택해 주세요.");
        }
    };

    const handleSlideChange = (swiper)=>{
        const currentSlide = swiper.slides[swiper.activeIndex];
        const currentCardId = currentSlide.getAttribute('data-key');
        setCardId(currentCardId);

        const selectedCard = cardList.find(card => card.cardId === Number(currentCardId));
        if (selectedCard) {
            setCardNo(selectedCard.cardNo.slice(-4));
        }
    }

    return (
        <div className='welfarePay-container'>
            <Header />
            <div className="information-container-pay">
                <p className="information-pay">결제할 카드를 선택 해주세요</p>
            </div>
            <Swiper
                grabCursor={true}
                className="payCard-swiper"
                slidesPerView={1.5}
                centeredSlides = {true}
                spaceBetween={10}
                onSlideChange={handleSlideChange}
            >
                {cardList.map((card, index) => (
                    <SwiperSlide key={index} data-key={card.cardId}>
                        {card.cardIsFamily?<img src={cardF} alt="카드" className="pay-card" />:<img src={cardP} alt="카드" className="pay-card" />}
                    </SwiperSlide>
        
                ))}
            </Swiper>
            <p className='pay-cardNo'>신한 Silver Care ({cardNo.slice(-4)})</p>
            <div className='pay-card-wrap'>
                
            </div>
            
            <p className='pay-error-message'>{errorMsg}</p>
            <div className='goCheckBtn-wrap'onClick={handleGoCheckPW}>
                <p className='goCheckBtn' >다음</p>
            </div>
        </div>
    );
}

export default WelfarePay;