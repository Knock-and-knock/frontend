import DolbomMain from 'welfare/component/DolbomMain';
import WelfareCheckPW from 'welfare/component/WelfareCheckPW';
import WelfareCheckSpec from 'welfare/component/WelfareCheckSpec';
import WelfareInputAddress from 'welfare/component/WelfareInputAddress';
import WelfareInputBirth from 'welfare/component/WelfareInputBirth';
import WelfareInputDisease from 'welfare/component/WelfareInputDisease';
import WelfareInputGender from 'welfare/component/WelfareInputGender';
import WelfareInputHeight from 'welfare/component/WelfareInputHeight';
import WelfareList from 'welfare/component/WelfareList';
import WelfareMain from 'welfare/component/welfareMain';
import WelfarePayComplete from 'welfare/component/welfarePayComplete';
import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
import WelfareReservedList from 'welfare/component/WelfareReservedList';
import WelfareNursingModal from 'welfare/component/WelfareNursingModal';
import WelfareHouseworkModal from 'welfare/component/WelfareHouseworkModal';
import WelfareHanwoolModal from 'welfare/component/WelfareHanwoolModal';
import WelfareSetPW from 'welfare/component/WelfareSetPW';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Modal from 'react-modal'
import WelfareInputTotal from 'welfare/component/welfareInputTotal';

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

        </Routes>
      </BrowserRouter>
  );
}

export default App;