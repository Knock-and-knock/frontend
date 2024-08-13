import PayBtn from "welfare/main/component/serviceBtn/PayBtn";
import PayReportBtn from "welfare/main/component/serviceBtn/PayReportBtn";
import WelfareBtn from "welfare/main/component/serviceBtn/WelfareBtn";

function ButtonGruop(props) {
  return (
    <div className="button-group">
      <PayBtn/>
      <WelfareBtn/>
      <PayReportBtn/>
    </div>
  );
}

export default ButtonGruop;