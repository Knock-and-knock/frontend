import CardCreate from 'cardCreate/CardCreate';
import VoiceChat from 'chat/VoiceChat';
import MainA from 'main/MainA';
import MainB from 'main/MainB';
import Match from 'matching/Match';
import Matching from 'matching/notice/Matching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelfareMain from 'welfare/component/welfareMain';

function App(props) {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainA />} />
          <Route path="/nokmain" element={<MainB />} />
          <Route path="/match" element={<Match />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/voicechat" element={<VoiceChat />} />
          <Route path="/welfare" element={<WelfareMain />} />
          <Route path="/cardcreate" element={<CardCreate/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;