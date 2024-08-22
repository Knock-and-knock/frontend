import Agreement from "cardCreate/application/Agreement";
import CardApp from "cardCreate/application/CardApp";
import CreditInfo from "cardCreate/application/CreditInfo";
import DefaultInfo from "cardCreate/application/DefaultInfo";
import ExtraInfo from "cardCreate/application/ExtraInfo";
import FundSourceInfo from "cardCreate/application/FundSourceInfo";
import CardCreate from "cardCreate/CardCreate";
import VoiceChat from "chat/VoiceChat";
import MainA from "main/MainA";
import MainB from "main/MainB";
import Match from "matching/Match";
import Matching from "matching/notice/Matching";

 

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddAddress from 'cardCreate/application/AddAddress';
import SimplePW from 'cardCreate/application/SimplePW';
import { createContext } from 'react';
import Modal from "react-modal";

Modal.setAppElement("#root");
export const CommonContext = createContext();


function App(props){
  return(
   
      <Routes>
        <Route path="/" element={<MainA />} /> 
        {/* 첫화면 메인화면으로 가기!! */}

        <Route path="/main" element={<MainA />} />
        <Route path="/nokmain" element={<MainB />} />
        <Route path="/match" element={<Match />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/voicechat" element={<VoiceChat />} />
        <Route path="/cardcreate" element={<CardCreate />} />
        <Route path="/main" element={<MainA />} />
        <Route path="/nokmain" element={<MainB />} />
        <Route path="/match" element={<Match />} />
        <Route path="/matching" element={<Matching />} />
        <Route path="/voicechat" element={<VoiceChat />} />
        <Route path="/cardcreate" element={<CardCreate />} />
        <Route path="/cardapp/*" element={<CardApp />}>
          <Route path="defaultinfo" element={<DefaultInfo />} />
          <Route path="extrainfo" element={<ExtraInfo />} />
          <Route path="agreement" element={<Agreement />} />
          <Route path="creditinfo" element={<CreditInfo />} />
          <Route path="fundsourceinfo" element={<FundSourceInfo />} />
          <Route path="address" element={<AddAddress />} />
          <Route path="simplepw" element={<SimplePW />} />
        </Route>
          
      </Routes>
    
    );
}

export default App;