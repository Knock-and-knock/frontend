import React, { useEffect, useState } from 'react';

function MyExtraInfoContent({userInfo}) {
    const [gender, setGender] = useState('');
    useEffect(()=>{
        if(userInfo.protegeGender===1){
            setGender('남');
        }else if(userInfo.protegeGender===2){
            setGender('여');
        }
    },[userInfo.protegeGender]);   
    return (
        // <div>
        //      <div className='info-content'>
        //         <p>생년월일</p>
        //         <p>{userInfo.protegeBirth}</p>
        //     </div>
        //     <div className='info-content'>
        //         <p>성별</p>
        //         <p>{gender}</p>
        //     </div>
        //     <div className='info-content'>
        //         <p>키</p>
        //         <p>{userInfo.protegeHeight} cm</p>
        //     </div>  
        //     <div className='info-content'>
        //         <p>몸무게</p>
        //         <p>{userInfo.protegeWeight} kg</p>
        //     </div>
        //     <div className='info-content'>
        //         <p>질병</p>
        //         <p>{userInfo.protegeDisease}</p>
        //     </div>
        //     <div className='info-content'>
        //         <p>주소</p>
        //         <p>{userInfo.protegeAddress}</p>
        //     </div>
        // </div>
        <div>
        <div className='info-content'>
           <p>생년월일</p>
           <p>1950. 01. 01</p>
       </div>
       <div className='info-content'>
           <p>성별</p>
           <p>남</p>
       </div>
       <div className='info-content'>
           <p>키</p>
           <p>175 cm</p>
       </div>  
       <div className='info-content'>
           <p>몸무게</p>
           <p>75 kg</p>
       </div>
       <div className='info-content'>
           <p>질병</p>
           <p>감기</p>
       </div>
       <div className='info-content'>
           <p className='info-content-address'>주소</p>
           <p>경기도 과천시 별양로 66-11 </p>
           <p>347동 1002호</p>
       </div>
   </div>
    );
}

export default MyExtraInfoContent;