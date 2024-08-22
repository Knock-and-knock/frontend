import React from 'react';
import ConsumeReportDate from 'consumeReport/component/ConsumeReportDate';
import ConsumeReportInfo from 'consumeReport/component/ConsumeReportInfo';
import ConsumeCircleChart from 'consumeReport/component/ConsumeCircleChart';
import ConsumeBarChart from 'consumeReport/component/ConsumeBarChart';
import Header from 'header/Header';
import 'consumeReport/ConsumeReport.css';

function consumeReport() {
    return (
        <div className='consume-report-container'>
            <Header />
            <ConsumeReportDate />
            <ConsumeReportInfo />
            <ConsumeCircleChart />
            <ConsumeBarChart />
        </div>
    );
}

export default consumeReport;