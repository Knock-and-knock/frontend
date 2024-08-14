import VoiceChat from 'chat/VoiceChat';
import MainA from 'main/MainA';
import MainB from 'main/MainB';
import Match from 'matching/Match';
import Matching from 'matching/notice/Matching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/main" element={<MainA />} />
          <Route path="/nokmain" element={<MainB />} />
          <Route path="/match" element={<Match />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/voicechat" element={<VoiceChat />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;