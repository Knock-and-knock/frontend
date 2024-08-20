import DolbomMain from "welfare/component/DolbomMain";
import WelfareCheckPW from "welfare/component/WelfareCheckPW";
import WelfareCheckSpec from "welfare/component/WelfareCheckSpec";
import WelfareInputAddress from "welfare/component/WelfareInputAddress";
import WelfareInputBirth from "welfare/component/WelfareInputBirth";
import WelfareInputDisease from "welfare/component/WelfareInputDisease";
import WelfareInputGender from "welfare/component/WelfareInputGender";
import WelfareInputHeight from "welfare/component/WelfareInputHeight";
// import WelfareList from 'welfare/component/WelfareList';
// import WelfareMain from 'welfare/component/WelfareMain';
// import WelfarePayComplete from 'welfare/component/WelfarePayComplete';
// import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
// import WelfareReservedList from 'welfare/component/WelfareReservedList';
// import WelfareReserveModal from 'welfare/component/WelfareReserveModal';
// import WelfareSetPW from 'welfare/component/WelfareSetPW';
import Agreement from "cardCreate/application/Agreement";
import CardApp from "cardCreate/application/CardApp";
import CreditInfo from "cardCreate/application/CreditInfo";
import DefaultInfo from "cardCreate/application/DefaultInfo";
import ExtraInfo from "cardCreate/application/ExtraInfo";
import FundSourceInfo from "cardCreate/application/FundSourceInfo";
import CardCreate from "cardCreate/CardCreate";
import VoiceChat from "chat/VoiceChat";
import LoginBio from "login/LoginBio";
import LoginId from "login/LoginId";
import LoginPw from "login/LoginPw";
import MainA from "main/MainA";
import MainB from "main/MainB";
import Match from "matching/Match";
import Matching from "matching/notice/Matching";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoInput from "signUp/component/InfoInput";
import PinCheck from "signUp/component/PinCheck";
import PinSetup from "signUp/component/PinSetup";
import QuickLoginSetup from "signUp/component/QuickLoginSetup";
import Register from "signUp/component/Register";
import RoleCheck from "signUp/component/RoleCheck";
import SignUpSuccess from "signUp/component/SignUpSuccess";
import VerifyCode from "signUp/component/VerifyCode";
import SignUpMain from "signUp/SignUpMain";
import WelfareMain from "welfare/component/welfareMain";

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
        <Route path="/loginId" element={<LoginId />} />
        <Route path="/loginPw" element={<LoginPw />} />
        <Route path="/signUp/*" element={<SignUpMain />}>
          <Route path="register" element={<Register />} />
          <Route path="infoInput" element={<InfoInput />} />
          <Route path="verifyCode" element={<VerifyCode />} />
          <Route path="roleCheck" element={<RoleCheck />} />
          <Route path="quickLoginSetup" element={<QuickLoginSetup />} />
          <Route path="pinSetup" element={<PinSetup />} />
          <Route path="pinCheck" element={<PinCheck />} />
          <Route path="signUpSuccess" element={<SignUpSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
