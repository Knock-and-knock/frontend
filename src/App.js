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
import WelfareInputTotal from 'welfare/component/WelfareInputTotal';

import Agreement from "cardCreate/application/Agreement";
import CardApp from "cardCreate/application/CardApp";
import CreditInfo from "cardCreate/application/CreditInfo";
import DefaultInfo from "cardCreate/application/DefaultInfo";
import ExtraInfo from "cardCreate/application/ExtraInfo";
import FundSourceInfo from "cardCreate/application/FundSourceInfo";
import CardCreate from "cardCreate/CardCreate";
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
          <Route path="/dolbom-main" element={<DolbomMain />} />
          <Route path="/welfare-check-pw" element={<WelfareCheckPW />} />
          <Route path="/welfare-check-spec" element={<WelfareCheckSpec />} />

          <Route path="/welfare-list" element={<WelfareList />} />
          <Route path="/welfare-main" element={<WelfareMain />} />
          <Route path="/welfare-paycomplete" element={<WelfarePayComplete />} />
          <Route path="/welfare-reserve-cancelmodal" element={<WelfareReserveCancelModal />} />
          <Route path="/welfare-reserved-list" element={<WelfareReservedList />} />
          <Route path="/welfare-nursing-modal" element={<WelfareNursingModal />} />
          <Route path="/welfare-housework-modal" element={<WelfareHouseworkModal />} />
          <Route path="/welfare-hanwool-modal" element={<WelfareHanwoolModal />} />
          <Route path="/welfare-set-pw" element={<WelfareSetPW />} />
          
          
          <Route path="/welfare-input/*" element={<WelfareInputTotal />} >
            <Route path="address" element={<WelfareInputAddress />} />
            <Route path="birth" element={<WelfareInputBirth />} />
            <Route path="disease" element={<WelfareInputDisease />} />
            <Route path="gender" element={<WelfareInputGender />} />
            <Route path="height" element={<WelfareInputHeight />} />
          </Route>

          <Route path="/main" element={<MainA />} />
          <Route path="/nokmain" element={<MainB />} />
          <Route path="/match" element={<Match />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/voicechat" element={<VoiceChat />} />
          <Route path="/cardcreate" element={<CardCreate/>} />
            
            <Route path="/main" element={<MainA />} />
        <Route path="/nokmain" element={<MainB />} />
        <Route path="/match" element={<Match />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/voicechat" element={<VoiceChat />} />
        <Route path="/welfare" element={<WelfareMain />} />
        <Route path="/loginBio" element={<LoginBio />} />
        <Route path="/cardcreate" element={<CardCreate />} />
        <Route path="/cardapp/*" element={<CardApp />}>
          <Route path="defaultinfo" element={<DefaultInfo />} />
          <Route path="extrainfo" element={<ExtraInfo />} />
          <Route path="agreement" element={<Agreement />} />
          <Route path="creditinfo" element={<CreditInfo />} />
          <Route path="fundsourceinfo" element={<FundSourceInfo />} />
        </Route>

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
