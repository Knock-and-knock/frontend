import info from "image/icon/info.png";
import 'main/component/card/CardSectionA.css';
import CreateCard from "main/component/card/CreateCard";

function CardSectionA(props) {
  return (
    <div className="card-sectionA">
      <div className="card-add-A">
        <div className="card-content-A">
          <img src={info} alt="" className="card-info-icon" />
          <div className="card-text">등록된 카드가 없습니다.</div>
        </div>
        <CreateCard/>
      </div>
    </div>
  );
}

export default CardSectionA;
