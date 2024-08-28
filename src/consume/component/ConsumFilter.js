import "consume/component/ConsumFilter.css";

function ConsumFilter(props) {
   
    return (
        <div className='filter-content'>
            <div className="filter-date">
                <p>2024.08.01 ~ 2024.08.06</p>
                <button className="filterBtn">기간설정</button>
            </div>
            <div className="filter-totalPrice">
                <p className='filter-price'>총 이용금액</p>
                <p className='filter-num'>231,500 원</p>
            </div>
            

        </div>
    );
}

export default ConsumFilter;
