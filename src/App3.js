import LoginBio from "login/LoginBio";
import LoginId from "login/LoginId";
import LoginPw from "login/LoginPw";
import ModifyInfo from "mypage/component/ModifyInfo";
import SubstituteInput from "mypage/component/SubstituteInput";
import MyPage from "mypage/MyPage";
import { createContext, useState } from "react";
import Modal from "react-modal";
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
Modal.setAppElement("#root");
export const CommonContext = createContext();
function App(props) {
  const [loginUser, setLoginUser] = useState({});
  return (
    
    <CommonContext.Provider value={{loginUser, setLoginUser}}>
        <Routes>
          <Route path="/loginbio" element={<LoginBio />} />
          <Route path="/loginid" element={<LoginId />} />
          <Route path="/loginpw" element={<LoginPw />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/subinput" element={<SubstituteInput />} />
          <Route path="/modifyinfo" element={<ModifyInfo />} />

          <Route path="/signup/*" element={<SignUpMain />}>
            <Route path="register" element={<Register />} />
            <Route path="infoinput" element={<InfoInput />} />
            <Route path="verifycode" element={<VerifyCode />} />
            <Route path="rolecheck" element={<RoleCheck />} />
            <Route path="quickloginsetup" element={<QuickLoginSetup />} />
            <Route path="pinsetup" element={<PinSetup />} />
            <Route path="pincheck" element={<PinCheck />} />
            <Route path="signupsuccess" element={<SignUpSuccess />} />
          </Route>
        </Routes>


      </CommonContext.Provider>
  );
}
export default App;
