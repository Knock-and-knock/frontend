import ChatSection from "main/component/chat/ChatSection";
import HeaderA from "main/component/header/HeaderA";
import ButtonGroup from "main/component/serviceBtn/ButtonGroup";
import "main/Main.css";
import CardSection from "./component/card/CardSection";
import CardTag from "./component/card/CardTag";

function MainA() {
  return (
    <div className="containerA">
      <HeaderA />
      <ChatSection />
      <ButtonGroup />
      <CardTag/>
      <CardSection />
    </div>
  );
}

export default MainA;
