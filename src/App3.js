
import AlarmList from 'alarm/AlarmList';
import Consumption from 'consume/Consumption';
import MainPage from 'home/MainPage';
import LoginBio from 'login/LoginBio';
import LoginId from 'login/LoginId';
import LoginPw from 'login/LoginPw';
import ModifyInfo from 'mypage/component/ModifyInfo';
import MyPage from 'mypage/MyPage';
import PrivateRoute from 'PrivateRoute';
import { createContext, useState } from 'react';
import Modal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import InfoInput from 'signUp/component/InfoInput';
import PinCheck from 'signUp/component/PinCheck';
import PinSetup from 'signUp/component/PinSetup';
import QuickLoginSetup from 'signUp/component/QuickLoginSetup';
import Register from 'signUp/component/Register';
import RoleCheck from 'signUp/component/RoleCheck';
import SignUpSuccess from 'signUp/component/SignUpSuccess';
import VerifyCode from 'signUp/component/VerifyCode';
import SignUpMain from 'signUp/SignUpMain';
Modal.setAppElement('#root');

export const CommonContext = createContext();
function App(props) {
  const [loginUser, setLoginUser] = useState({});
  
  return (
    
    <CommonContext.Provider value={{loginUser, setLoginUser}}>
        <Routes>
          <Route path="/loginbio" element={<LoginBio />} />
          <Route path="/loginid" element={<LoginId />} />
          <Route path="/loginpw" element={<LoginPw />} />
          <Route path="/mypage" element={<PrivateRoute><MyPage /></PrivateRoute>} />
          <Route path="/modifyinfo" element={<PrivateRoute><ModifyInfo /></PrivateRoute>} />
          <Route path="/consumption" element={<PrivateRoute><Consumption /></PrivateRoute>} />
          <Route path="/alarm" element={<PrivateRoute><AlarmList /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><MainPage /></PrivateRoute>} />
          
          <Route path="/signup/*" element={<SignUpMain/>} >
            <Route path="register" element={<PrivateRoute><Register/></PrivateRoute>} />
            <Route path="infoinput" element={<PrivateRoute><InfoInput/></PrivateRoute>} />
            <Route path="verifycode" element={<PrivateRoute><VerifyCode/></PrivateRoute>} />
            <Route path="rolecheck" element={<PrivateRoute><RoleCheck/></PrivateRoute>} />
            <Route path="quickloginsetup" element={<PrivateRoute><QuickLoginSetup/></PrivateRoute>} />  
            <Route path="pinsetup" element={<PrivateRoute><PinSetup/></PrivateRoute>} /> 
            <Route path="pincheck" element={<PrivateRoute><PinCheck/></PrivateRoute>} />   
            <Route path="signupsuccess" element={<PrivateRoute><SignUpSuccess/></PrivateRoute>} />
          </Route>
        </Routes>


      </CommonContext.Provider>
  );
}
export default App;
