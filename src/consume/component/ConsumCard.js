import "consume/component/ConsumCard.css";
import card from "image/card2.png";

function ConsumCard(props) {
    return (
        <div className='consumCard-container'>
             <img src={card} alt="카드" className="consume-card" />
             <p>신한 Life Care (1234)</p>
        </div>
    );
}

export default ConsumCard;