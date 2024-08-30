import { call } from "login/service/ApiService";
import "matching/notice/Matching.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Matching(props) {
  const location = useLocation(); 
  const navi = useNavigate();
  const { matchStatus } = location.state || {};

  useEffect(() => {
    if (matchStatus === "ACCEPT") {
      navi('/nokmain'); 
    }
  }, [matchStatus, navi]);

  call('/api/v1/match',"GET").then((response)=>{
    console.log(response);
    if(response.matchStatus === "ACCEPT"){
      navi("/home")
    }
}).catch((error)=>{
  console.log(error.message);
    alert("매칭실패");
    navi(-1);
});

  return (
    <div className="match-load">
      매칭중입니다...
    </div>
  );
}

export default Matching;