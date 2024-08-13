import "welfare/matching/Match.css";
import "welfare/matching/header/Header.css";
import Header from "./header/Header";
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