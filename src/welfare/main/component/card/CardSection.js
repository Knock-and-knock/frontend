import info from "image/icon/info.png";
import 'welfare/main/component/card/CardSectionA.css';
import CreateCard from "welfare/main/component/card/CreateCard";

function CardSection(props) {
  return (
    <div className="card-section">
      <div className="card-add">
        <div className="card-content">
          <img src={info} alt="" className="card-info-icon" />
          <div className="card-text">등록된 카드가 없습니다.</div>
        </div>
        <CreateCard/>
      </div>
    </div>
  );
}

export default CardSection;
