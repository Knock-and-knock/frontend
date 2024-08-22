import Header from 'header/Header';
import React from 'react';
import ConsumList from './component/ConsumList';
import "consume/Consumption.css";
import ConsumFilter from './component/ConsumFilter';

function Consumption(props) {
    return (
        <div>
            <Header/>
            <div className="consumList-container">
                <ConsumFilter/>
                <ConsumList/>
            </div>
        </div>
    );
}

export default Consumption;