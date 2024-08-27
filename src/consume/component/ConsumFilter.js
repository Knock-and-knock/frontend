import "consume/component/ConsumFilter.css";

function ConsumFilter(props) {
   
    return (
        <div className='filter-content'>
            <div>
                <p>2024.08.01 ~ 2024.08.06</p>
                <button>기간설정</button>
            </div>

            <p>총 이용금액</p>
            <p className='filter-price'>총 <span className='priceNum'>231,500</span> 원</p>

        </div>
    );
}

export default ConsumFilter;
