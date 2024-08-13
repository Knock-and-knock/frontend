import "welfare/main/Main.css";
import ChatSection from "welfare/main/component/chat/ChatSection";
import HeaderA from "welfare/main/component/header/HeaderA";
import ButtonGroup from "welfare/main/component/serviceBtn/ButtonGroup";
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
