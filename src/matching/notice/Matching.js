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
      navi("/home");
    }
  }, [matchStatus, navi]);

  call("/api/v1/match", "GET")
    .then((response) => {
      console.log(response);
      if (response.matchStatus === "ACCEPT") {
        navi("/home");
      } else {
        navi(-1);
      }
    })
    .catch((error) => {
      console.log(error.message);
      alert("매칭실패");
    });

  return <div className="match-load">매칭중입니다...</div>;
}

export default Matching;
