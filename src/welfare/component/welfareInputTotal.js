import React, { createContext, useContext, useState } from 'react';


export const WelfareSpec = createContext(); // 내장 API(createContext)를 사용하여 하나씩 가져옴
export const useSpec = ()=>useContext(WelfareSpec); // 가져온 것들 전부 요 변수에 담음

function WelfareInputTotal(props) {
    const [userSpec, setUserSpec] = useState({});
    // useSpec: setUserSpec으로 받은 값을 넣을 변수
    // setUserSpec: input에서 값을 새로 입력받아서 넣는 함수 이름
    // useState: 위의 일을 가능하게 해주는 내장 함수

    return (
        <div>
            {/* Outlet: App.JS에서 설정한 해당 문서의 자식 컴포넌트들을 지칭함 */}
        </div>
    );
}

export default WelfareInputTotal;