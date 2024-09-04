import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import DisconnectionModal from './modal/DisconnectionModal';

function MyMatchingInfo({loginUser}) {
    const [matchingInfo, setMatchingInfo] = useState({});
    const [error, setError] = useState('');
    const [isMatched, setIsMatched] = useState(true);
    useEffect(()=>{
        call('/api/v1/match', 'GET', null)
        .then((response)=>setMatchingInfo(response))
        .catch(error => {
                setIsMatched(false);
                setError("매칭된 사람이 없습니다.");
            
            
        });
    },[]);
    return (
        <div className='info-container'>
            
                <div className='info-title'>
                    <p>매칭정보</p>
                </div>
                {isMatched?(
                <div>
                    <div className='info-content'>
                        <p>이름</p>
                        <p>{loginUser==='PROTEGE'?matchingInfo.protectorUserName:matchingInfo.protegeUserName}</p>
                
                    </div>
                    <div className='info-content'>
                        <p>호칭</p>
                        <p>{loginUser==='PROTEGE'?matchingInfo.matchProtectorName:matchingInfo.matchProtegeName}</p>    
                    </div>
                </div>):
            <p className='error'>{error}</p>}
            {isMatched&&loginUser==="PROTEGE"&& matchingInfo.matchNo !== 0?<DisconnectionModal matchNo={matchingInfo.matchNo}/>:""}
        </div>
    );
}

export default MyMatchingInfo;