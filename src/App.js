import CardCreate from 'cardCreate/CardCreate';
import VoiceChat from 'chat/VoiceChat';
import LoginBio from 'login/LoginBio';
import LoginId from 'login/LoginId';
import LoginPw from 'login/LoginPw';
import MainA from 'main/MainA';
import MainB from 'main/MainB';
import Match from 'matching/Match';
import Matching from 'matching/notice/Matching';
<<<<<<< HEAD
import Register from 'signUp/component/Register';
=======
import WelfareMain from 'welfare/component/welfareMain';
import Register from 'signUp/Register';
>>>>>>> develop
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpSuccess from 'signUp/component/SignUpSuccess';
import InfoInput from 'signUp/component/InfoInput';
import VerifyCode from 'signUp/component/VerifyCode';
import RoleCheck from 'signUp/component/RoleCheck';
import QuickLoginSetup from 'signUp/component/QuickLoginSetup';
import PinSetup from 'signUp/component/PinSetup';
import PinCheck from 'signUp/component/PinCheck';
import SignUpMain from 'signUp/SignUpMain';

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


          <Route path="/signUp/*" element={<SignUpMain/>} >
            <Route path="register" element={<Register/>} />
            <Route path="infoInput" element={<InfoInput/>} />
            <Route path="verifyCode" element={<VerifyCode/>} />
            <Route path="roleCheck" element={<RoleCheck/>} />
            <Route path="quickLoginSetup" element={<QuickLoginSetup/>} />  
            <Route path="pinSetup" element={<PinSetup/>} /> 
            <Route path="pinCheck" element={<PinCheck/>} />   
            <Route path="signUpSuccess" element={<SignUpSuccess/>} />
          </Route>



        </Routes>
      </BrowserRouter>
  );
}

export default App;