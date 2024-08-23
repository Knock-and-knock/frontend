import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "consume/component/ConsumDate.css";
import "react-datepicker/dist/react-datepicker.css";

function ConsumDate(props) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='consumDate-contaienr'>
            <DatePicker className='filter-title' selected={startDate} onChange={date => setStartDate(date)}/>
        </div>
    );
}

export default ConsumDate;