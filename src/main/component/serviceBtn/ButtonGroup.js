import PayBtn from "main/component/serviceBtn/PayBtn";
import PayReportBtn from "main/component/serviceBtn/PayReportBtn";
import WelfareBtn from "main/component/serviceBtn/WelfareBtn";

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