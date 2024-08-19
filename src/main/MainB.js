import HeaderB from "main/component/header/HeaderB";
import ButtonGroup from "main/component/serviceBtn/ButtonGroup";
import "main/Main.css";
import CardTagB from "./component/card/CardTagB";
import IsCardSectionB from "./component/card/IsCardSectionB";
import AlarmSection from "./component/payAlarm/AlarmSection";

function MainB() {
  return (
    <div className="containerB">
      <HeaderB />
      <AlarmSection />
      <ButtonGroup />
      <CardTagB/>
      <IsCardSectionB />
    </div>
  );
}

export default MainB;
