import DolbomMain from 'welfare/component/DolbomMain';
import WelfareCheckPW from 'welfare/component/WelfareCheckPW';
import WelfareCheckSpec from 'welfare/component/WelfareCheckSpec';
import WelfareHanwoolModal from 'welfare/component/WelfareHanwoolModal';
import WelfareHouseworkModal from 'welfare/component/WelfareHouseworkModal';
import WelfareInputAddress from 'welfare/component/WelfareInputAddress';
import WelfareInputBirth from 'welfare/component/WelfareInputBirth';
import WelfareInputDisease from 'welfare/component/WelfareInputDisease';
import WelfareInputGender from 'welfare/component/WelfareInputGender';
import WelfareInputHeight from 'welfare/component/WelfareInputHeight';
import WelfareList from 'welfare/component/WelfareList';
import WelfareMain from 'welfare/component/welfareMain';
import WelfarePayComplete from 'welfare/component/welfarePayComplete';
import WelfareNursingModal from 'welfare/component/WelfareNursingModal';
import WelfareReserveCancelModal from 'welfare/component/WelfareReserveCancelModal';
import WelfareReservedList from 'welfare/component/WelfareReservedList';
import WelfareSetPW from 'welfare/component/WelfareSetPW';

import ConsumeReport from 'consumeReport/component/ConsumeReport';

import { Route, Routes } from 'react-router-dom';

import Modal from 'react-modal';
import WelfareInputTotal from 'welfare/component/WelfareInputTotal';



Modal.setAppElement('#root');

function App(props) {
  return (
    <Routes>
      
      <Route path="/welfare-check-pw" element={<WelfareCheckPW />} />
      <Route path="/welfare-list" element={<WelfareList />} />
      <Route path="/welfare-main" element={<WelfareMain />} />
      <Route path="/welfare-paycomplete" element={<WelfarePayComplete />} />
      <Route path="/welfare-reserve-cancelmodal" element={<WelfareReserveCancelModal />} />
      <Route path="/welfare-reserved-list" element={<WelfareReservedList />} />
      <Route path="/welfare-set-pw" element={<WelfareSetPW />} />
      
      <Route path="/welfare-input/*" element={<WelfareInputTotal />}>
        <Route path="address" element={<WelfareInputAddress />} />
        <Route path="birth" element={<WelfareInputBirth />} />
        <Route path="disease" element={<WelfareInputDisease />} />
        <Route path="gender" element={<WelfareInputGender />} />
        <Route path="height" element={<WelfareInputHeight />} />

        <Route path="check-spec" element={<WelfareCheckSpec />} />

        <Route path="dolbom-main" element={<DolbomMain />} /> 
        {/* dolbom-main을 통해서 모달을 열기 때문에 dolbom-main 또한 WelfareInputTotal의 자식 요소여야함 */}
        <Route path="nursing-modal" element={<WelfareNursingModal />} />
        <Route path="housework-modal" element={<WelfareHouseworkModal />} />
        <Route path="hanwool-modal" element={<WelfareHanwoolModal />} />
      </Route>

      <Route path="/consume-report" element={<ConsumeReport />} />

    </Routes>
  );
}

export default App;
