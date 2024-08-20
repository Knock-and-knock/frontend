
import DolbomMain from 'welfare/component/DolbomMain';
import WelfareCheckPW from 'welfare/component/WelfareCheckPW';
import WelfareCheckSpec from 'welfare/component/WelfareCheckSpec';
import WelfareInputAddress from 'welfare/component/WelfareInputAddress';
import WelfareInputBirth from 'welfare/component/WelfareInputBirth';
import WelfareInputDisease from 'welfare/component/WelfareInputDisease';
import WelfareInputGender from 'welfare/component/WelfareInputGender';
import WelfareInputHeight from 'welfare/component/WelfareInputHeight';
// import WelfareList from 'welfare/component/WelfareList';
// import WelfareMain from 'welfare/component/WelfareMain';
// import WelfarePayComplete from 'welfare/component/WelfarePayComplete';
// import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
// import WelfareReservedList from 'welfare/component/WelfareReservedList';
// import WelfareReserveModal from 'welfare/component/WelfareReserveModal';
// import WelfareSetPW from 'welfare/component/WelfareSetPW';
import CardCreate from 'cardCreate/CardCreate';
import VoiceChat from 'chat/VoiceChat';
import LoginBio from 'login/LoginBio';
import LoginId from 'login/LoginId';
import LoginPw from 'login/LoginPw';
import MainA from 'main/MainA';
import MainB from 'main/MainB';
import Match from 'matching/Match';
import Matching from 'matching/notice/Matching';
import Register from 'signUp/component/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpSuccess from 'signUp/component/SignUpSuccess';
import InfoInput from 'signUp/component/InfoInput';
import VerifyCode from 'signUp/component/VerifyCode';
import RoleCheck from 'signUp/component/RoleCheck';
import QuickLoginSetup from 'signUp/component/QuickLoginSetup';
import PinSetup from 'signUp/component/PinSetup';
import PinCheck from 'signUp/component/PinCheck';
import SignUpMain from 'signUp/SignUpMain';

import Modal from 'react-modal';

Modal.setAppElement('#root');

function App(props) {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/DolbomMain" element={<DolbomMain />} />
          <Route path="/WelfareCheckPW" element={<WelfareCheckPW />} />
          <Route path="/WelfareCheckSpec" element={<WelfareCheckSpec />} />
          <Route path="/WelfareInputAddress" element={<WelfareInputAddress />} />
          <Route path="/WelfareInputBirth" element={<WelfareInputBirth />} />
          <Route path="/WelfareInputDisease" element={<WelfareInputDisease />} />
          <Route path="/WelfareInputGender" element={<WelfareInputGender />} />
          <Route path="/WelfareInputHeight" element={<WelfareInputHeight />} />
          {/* <Route path="/WelfareList" element={<WelfareList />} />
          <Route path="/WelfareMain" element={<WelfareMain />} />
          <Route path="/WelfarePayComplete" element={<WelfarePayComplete />} />
          <Route path="/WelfareReserveCancelModal" element={<WelfareReserveCancelModal />} />
          <Route path="/WelfareReservedList" element={<WelfareReservedList />} />
          <Route path="/WelfareReserveModal" element={<WelfareReserveModal />} />
          <Route path="/WelfareSetPW" element={<WelfareSetPW />} /> */}
          <Route path="/main" element={<MainA />} />
          <Route path="/nokmain" element={<MainB />} />
          <Route path="/match" element={<Match />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/voicechat" element={<VoiceChat />} />
          <Route path="/cardcreate" element={<CardCreate/>} />
          <Route path="/loginbio" element={<LoginBio />} />
          <Route path="/loginid" element={<LoginId />} />
          <Route path="/loginpw" element={<LoginPw />} />


          <Route path="/signup/*" element={<SignUpMain/>} >
            <Route path="register" element={<Register/>} />
            <Route path="infoinput" element={<InfoInput/>} />
            <Route path="verifycode" element={<VerifyCode/>} />
            <Route path="rolecheck" element={<RoleCheck/>} />
            <Route path="quickloginsetup" element={<QuickLoginSetup/>} />  
            <Route path="pinsetup" element={<PinSetup/>} /> 
            <Route path="pincheck" element={<PinCheck/>} />   
            <Route path="signupsuccess" element={<SignUpSuccess/>} />
          </Route>



        </Routes>
      </BrowserRouter>
  );
}

export default App;