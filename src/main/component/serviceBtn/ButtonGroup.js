import PayBtn from "main/component/serviceBtn/PayBtn";
import PayReportBtn from "main/component/serviceBtn/PayReportBtn";
import WelfareBtn from "main/component/serviceBtn/WelfareBtn";
import { useNavigate } from "react-router-dom";

function ButtonGruop(props) {
  const navigate = useNavigate();
  const handleWelfareClick=()=>{
    navigate("/welfare-main");
  }
  return (
    <div className="button-group">
      <PayBtn/>
      <WelfareBtn handleWelfareClick={handleWelfareClick}/>
      <PayReportBtn/>
    </div>
  );
}

export default ButtonGruop;