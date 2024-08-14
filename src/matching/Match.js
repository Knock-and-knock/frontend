import Header from "matching/header/Header";
import "matching/header/Header.css";
import "matching/Match.css";
import FYIInput from "./notice/FYIInput";
import FYINotice from "./notice/FYINotice";

function Match(props) {
  return (
    <div className="container">
      <Header/>
      <FYINotice/>
      <FYIInput/>
    </div>
  );
}

export default Match;