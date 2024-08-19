import "cardCreate/CardCreate.css";
import card from "image/create-card-image.png";
import cashback from "image/icon/cashback.png";
import insurance from "image/icon/insurance.png";
import medical from "image/icon/medical.png";
import CardCreateHeader from "./header/CardCreateHeader";

function CardCreate(props) {
  return (
    <div className="card-create-container">
      <CardCreateHeader />
      <div className="cardName">
        <p>신한카드 Life Care</p>
      </div>
      <div className="create-card-image">
        <img src={card} alt="카드이미지" className="cardImage" />
      </div>
      <div className="boon-group">
        <div className="medical">
          <img src={medical} alt="의료아이콘" />
          <div className="boon-text">
            병원, 약국
            <br />
            <b>5%</b>캐시백
          </div>
        </div>
        <div className="insurance">
          <img src={insurance} alt="보험아이콘" />
          <div className="boon-text">
            보험료
            <br />
            <b>5%</b>캐시백
          </div>
        </div>
        <div className="cashback">
          <img src={cashback} alt="캐시백아이콘" />
          <div className="boon-text">
            월 이용 TOP3
            <br />
            <b>5%</b>캐시백
          </div>
        </div>
      </div>
      <div className="anuualContainer">
        <p className="anuual-title">연회비</p>
        <hr />
        <div className="anuual-text">
          <span>국내전용</span>
          <span>
            <b>2만원</b>
          </span>
        </div>
        <div className="anuual-text">
          <span>VISA</span>
          <span>
            <b>2만3천원</b>
          </span>
        </div>
      </div>
      <button className="appBtn">신청하기</button>
    </div>
  );
}

export default CardCreate;
