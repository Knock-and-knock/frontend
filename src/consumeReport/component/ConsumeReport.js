import React from 'react';
import ConsumeReportDate from 'consumeReport/component/ConsumeReportDate';
import ConsumeReportInfo from 'consumeReport/component/ConsumeReportInfo';

import Header from 'header/Header';
import 'consumeReport/ConsumeReport.css';

function consumeReport() {
    return (
        <div className='consume-report-container'>
            <Header />
            <ConsumeReportDate />
            <ConsumeReportInfo />
        </div>
    );
}

export default consumeReport;