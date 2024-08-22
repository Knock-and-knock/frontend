import React, { useState, useEffect } from 'react';

function ConsumeReportDate() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [displayDate, setDisplayDate] = useState('');

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const today = new Date();
        const lastDayOfMonth = new Date(currentYear, selectedMonth, 0).getDate();
        const endDate = selectedMonth === (today.getMonth() + 1) 
                        ? today.getDate() 
                        : lastDayOfMonth;
        setDisplayDate(`${currentYear}. ${String(selectedMonth).padStart(2, '0')}. 01 ~ ${currentYear}. ${String(selectedMonth).padStart(2, '0')}. ${String(endDate).padStart(2, '0')}`);
    }, [selectedMonth]);

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value, 10));
    };

    const generateMonthOptions = () => {
        const months = [];
        for (let i = 1; i <= 12; i++) {
            months.push(<option key={i} value={i}>{i}월</option>);
        }
        return months;
    };

    return (
        <div className='consume-report-date-container'>
            <select value={selectedMonth} onChange={handleMonthChange}>
                {generateMonthOptions()}
            </select>
            <p className='displayed-date'>{displayDate}</p>

        </div>
    );
}

export default ConsumeReportDate;
