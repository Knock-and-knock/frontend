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

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        </Routes>
      </BrowserRouter>
  );
}

export default App;