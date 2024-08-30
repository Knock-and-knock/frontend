import "home/component/CardSection.css";
import card from "image/home-card.png";

function CardSection({cardlist}) {
    const cardNo = cardlist?.cardNo || '0000';
   
    return (
       
        <div className='cardSection-container'> 
            <p className='cardSection-title'>카드</p>
            <div className='cardSection-content'>
                <div>
                    <div className='cardSection-price'>
                        <p>이번달 사용금액</p>
                        <p>{cardlist.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
                
                    </div> 
                    <p className='cardSection-cardName'>{cardlist.cardBank} Life Care({cardNo.slice(-4)})</p> 
                </div>
                <img src={card} alt="카드" className="creditCard" />           
            </div>
        </div>
       
    );
}

export default CardSection;