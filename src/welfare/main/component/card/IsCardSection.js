import card from "image/card.png";
import 'welfare/main/component/card/CardSectionB.css';

function CardSection(props) {
  return (
    <div className="card-section">
      <div className="card-add">
        <div className="card-content">
          <img src={card} alt="" className="creditCard" />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
