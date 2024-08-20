
import DolbomMain from 'welfare/component/DolbomMain';
import WelfareCheckPW from 'welfare/component/WelfareCheckPW';
import WelfareCheckSpec from 'welfare/component/WelfareCheckSpec';
import WelfareInputAddress from 'welfare/component/WelfareInputAddress';
import WelfareInputBirth from 'welfare/component/WelfareInputBirth';
import WelfareInputDisease from 'welfare/component/WelfareInputDisease';
import WelfareInputGender from 'welfare/component/WelfareInputGender';
import WelfareInputHeight from 'welfare/component/WelfareInputHeight';
import WelfareList from 'welfare/component/WelfareList';
import WelfareMain from 'welfare/component/WelfareMain';
import WelfarePayComplete from 'welfare/component/WelfarePayComplete';
import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
import WelfareReservedList from 'welfare/component/WelfareReservedList';
import WelfareNursingModal from 'welfare/component/WelfareNursingModal';
import WelfareHouseworkModal from 'welfare/component/WelfareHouseworkModal';
import WelfareHanwoolModal from 'welfare/component/WelfareHanwoolModal';
import WelfareSetPW from 'welfare/component/WelfareSetPW';
import WelfareInputTotal from 'welfare/component/welfareInputTotal';

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

function App(props) {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/dolbomMain" element={<DolbomMain />} />
          <Route path="/welfareCheckPW" element={<WelfareCheckPW />} />
          <Route path="/welfareCheckSpec" element={<WelfareCheckSpec />} />

          <Route path="/welfareList" element={<WelfareList />} />
          <Route path="/welfareMain" element={<WelfareMain />} />
          <Route path="/welfarePayComplete" element={<WelfarePayComplete />} />
          <Route path="/welfareReserveCancelModal" element={<WelfareReserveCancelModal />} />
          <Route path="/welfareReservedList" element={<WelfareReservedList />} />
          <Route path="/welfareNursingModal" element={<WelfareNursingModal />} />
          <Route path="/welfareHouseworkModal" element={<WelfareHouseworkModal />} />
          <Route path="/welfareHanwoolModal" element={<WelfareHanwoolModal />} />
          <Route path="/welfareSetPW" element={<WelfareSetPW />} />
          
          <Route path="/welfareInputTotal/*" element={<WelfareInputTotal />} >
            <Route path="welfareInputAddress" element={<WelfareInputAddress />} />
            <Route path="welfareInputBirth" element={<WelfareInputBirth />} />
            <Route path="welfareInputDisease" element={<WelfareInputDisease />} />
            <Route path="welfareInputGender" element={<WelfareInputGender />} />
            <Route path="welfareInputHeight" element={<WelfareInputHeight />} />
          </Route>

          <Route path="/main" element={<MainA />} />
          <Route path="/nokmain" element={<MainB />} />
          <Route path="/match" element={<Match />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/voicechat" element={<VoiceChat />} />
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