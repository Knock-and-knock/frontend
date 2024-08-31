import "consume/component/ConsumCard.css";
import "consume/component/ConsumFilter.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import card from "image/card2.png";

function ConsumCard({ cardlist, startDate, endDate, handleOpenModal }) {
    return (
        <div className='consumCard-container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                navigation
            >
                {cardlist.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={card} alt="카드" className="consume-card" />
                        <p>{item.cardBank} Life Care ({item.cardNo.slice(-4)})</p>
                        <div className='filter-content'>
                            <div className="filter-date">
                                <p>{startDate && endDate ? `${startDate} ~ ${endDate}` : '날짜 선택'}</p>
                                <button onClick={() => handleOpenModal(item.cardId)} className="filterBtn">기간설정</button>
                            </div>
                            <div className="filter-totalPrice">
                                <p className='filter-price'>총 이용금액</p>
                                <p className='filter-num'>
                                    {item.totalAmount.toLocaleString()} 원
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ConsumCard;





