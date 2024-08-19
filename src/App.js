import CardCreate from 'cardCreate/CardCreate';
import VoiceChat from 'chat/VoiceChat';
import LoginBio from 'login/LoginBio';
import LoginId from 'login/LoginId';
import LoginPw from 'login/LoginPw';
import MainA from 'main/MainA';
import MainB from 'main/MainB';
import Match from 'matching/Match';
import Matching from 'matching/notice/Matching';
import WelfareMain from 'welfare/component/welfareMain';
import Register from 'signUp/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpSuccess from 'signUp/SignUpSuccess';
import InfoInput from 'signUp/InfoInput';
import VerifyCode from 'signUp/VerifyCode';
import RoleCheck from 'signUp/RoleCheck';
import QuickLoginSetup from 'signUp/QuickLoginSetup';
import PinSetup from 'signUp/PinSetup';
import PinCheck from 'signUp/PinCheck';

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
          <Route path="/loginBio" element={<LoginBio />} />
          <Route path="/loginId" element={<LoginId />} />
          <Route path="/loginPw" element={<LoginPw />} />
          <Route path="/signUp" element={<Register/>} />
          <Route path="/infoInput" element={<InfoInput/>} />
          <Route path="/verifyCode" element={<VerifyCode/>} />
          <Route path="/roleCheck" element={<RoleCheck/>} />
          <Route path="/quickLoginSetup" element={<QuickLoginSetup/>} />  
          <Route path="/pinSetup" element={<PinSetup/>} /> 
          <Route path="/pinCheck" element={<PinCheck/>} />   
          <Route path="/signUpSuccess" element={<SignUpSuccess/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;