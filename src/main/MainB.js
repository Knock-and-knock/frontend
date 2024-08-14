import HeaderB from "main/component/header/HeaderB";
import ButtonGroup from "main/component/serviceBtn/ButtonGroup";
import "main/Main.css";
import CardTag from "./component/card/CardTag";
import IsCardSection from "./component/card/IsCardSection";
import AlarmSection from "./component/payAlarm/AlarmSection";

function MainB() {
  return (
    <div className="containerB">
      <HeaderB />
      <AlarmSection />
      <ButtonGroup />
      <CardTag/>
      <IsCardSection />
    </div>
  );
}

export default MainB;
