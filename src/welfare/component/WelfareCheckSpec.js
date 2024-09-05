import React, { useState, useEffect } from "react";
import styles from "welfare/css/WelfareCheckSpec.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "header/Header.js";
import { useSpecHook } from "welfare/component/WelfareInputTotal";
import { call } from "login/service/ApiService";

function WelfareCheckSpec() {
  const navigate = useNavigate();
  const { userSpec, setUserSpec } = useSpecHook();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const location = useLocation();
  const {welfareNo,welfareBookStartDate,welfareBookUseTime,isExtraInfo} = location.state || {};

  const [userInfo, setUserInfo] = useState([]);

  // const fetchUserData = async () => {
  //   try {
  //     call("/api/v1/users", "GET", null).then((response)=>{setResponse(response)});
  //     setUserSpec((prevSpec) => ({
  //       ...prevSpec,
  //       userName: response.protegeName,
  //       userBirth: response.protegeBirth,
  //       protegeBirth: response.userBirth,
  //       userGender: response.protegeGender,
  //       protegeGender: response.userGender,
  //       userHeight: response.protegeHeight,
  //       protegeHeight: response.userHeight,
  //       userWeight: response.protegeWeight,
  //       protegeWeight: response.userWeight,
  //       userDisease: response.protegeDisease,
  //       protegeDisease: response.protegeDisease,
  //       userAddress: response.protegeAddress,
  //       userAddressDetail: response.protegeAddressDetail,
  //       protegeAddress: response.protegeAddress,
  //       protegeAddressDetail: response.protegeAddressDetail,
  //     }));
  //     setLoading(false); // 데이터가 모두 로드된 후 로딩 종료
  //   } catch (error) {
  //     console.error("Failed to fetch user info", error);
  //     setLoading(false); // 에러 발생 시에도 로딩 종료
  //   }
  // };


  // useEffect(() => {
  //   if (localStorage.getItem("loginUser") === "PROTECTOR") {
  //     call("/api/v1/match", "GET", null).then((response)=>{setResponse(response);});
  //     setUserSpec((prevSpec) => ({
  //       ...prevSpec,
  //       protegeUserNo: response.protegeUserNo, // 필요한 데이터 설정
  //     }));
  //   } else {
  //     const userNo = localStorage.getItem("userNo");
  //     setUserSpec((prevSpec) => ({
  //       ...prevSpec,
  //       userNo: parseInt(userNo, 10),
  //     }));
  //   }

  //   if (welfareNo != null && welfareBookStartDate != null && welfareBookUseTime != null) {
  //     setUserSpec((userSpec) => ({
  //       ...userSpec,
  //       welfareNo: welfareNo,
  //       welfareBookStartDate: welfareBookStartDate,
  //       welfareBookUseTime: welfareBookUseTime,
  //     }));
  //   }
  //   console.log("----------------------------------");
  //   console.log(userSpec);
  //   console.log("----------------------------------");
  // }, [])

  // useEffect(() => {
  //   console.log("음성인식에서 받는 값 3개!!: " + welfareNo,welfareBookStartDate,welfareBookUseTime);
  //   fetchUserData();
  // }, [setUserSpec]);

const getUserInfo = ()=>{
  call('/api/v1/users',"GET",null).then((response)=>{
    setUserInfo(response);
  }).catch((error)=>{
    console.log("회원정보 에러");
  });
}

  useEffect(()=>{
    //내가 보호자일 때,
    if (localStorage.getItem("loginUser") === "PROTECTOR") {
      //이전에 입력된 정보가 있는 경우
      if(isExtraInfo){
        getUserInfo();
        call('/api/v1/match',"GET",null).then((response)=>{
          setUserSpec((prevSpec) => ({
            ...prevSpec,
            userNo: response.userNo,
            userName: response.protegeUserName,
            userBirth: userInfo.protegeBirth,
            protegeAddress: userInfo.protegeAddress,
            protegeAddressDetail: userInfo.protegeAddressDetail,
            userGender: userInfo.protegeGender,
            userHeight: userInfo.protegeHeight,
            userWeight: userInfo.protegeWeight,
            userDisease: userInfo.protegeDisease
          }));
        }).catch((error)=>{
          console.log("피보호자 매칭조회 실패");
        });
        //직접 입력 받은 경우
      }else{
        call('/api/v1/match',"GET",null).then((response)=>{
          setUserSpec((prevSpec) => ({
            ...prevSpec,
            userNo: response.userNo,
            userName: response.protegeUserName,
          }));
        }).catch((error)=>{
          console.log("피보호자 매칭조회 실패");
        });
      }
    }else{
      //내가 일반사용자일 때, 이전에 입력된 정보가 있는 경우
      if(isExtraInfo){
        getUserInfo();
        setUserSpec((prevSpec) => ({
          ...prevSpec,
          userNo: userInfo.userNo,
          userName: userInfo.userName,
          userBirth: userInfo.protegeBirth,
          protegeAddress: userInfo.protegeAddress,
          protegeAddressDetail: userInfo.protegeAddressDetail,
          userGender: userInfo.protegeGender,
          userHeight: userInfo.protegeHeight,
          userWeight: userInfo.protegeWeight,
          userDisease: userInfo.protegeDisease
        }));
        // 똑똑이가 정보를 넘겨주는 경우
      }else if(welfareNo && welfareBookStartDate && welfareBookUseTime){
        getUserInfo();
        setUserSpec((prevSpec) => ({
          ...prevSpec,
          userNo: welfareNo,
          userBirth: userInfo.protegeBirth,
          protegeAddress: userInfo.protegeAddress,
          protegeAddressDetail: userInfo.protegeAddressDetail,
          userGender: userInfo.protegeGender,
          userHeight: userInfo.protegeHeight,
          userWeight: userInfo.protegeWeight,
          userDisease: userInfo.protegeDisease
        }));
      }else{
        //직접 입력 받은 경우
        getUserInfo();
        setUserSpec((prevSpec) => ({
          ...prevSpec,
          userNo: userInfo.userNo,
          userName: userInfo.userName,
  
        }));
      }
    }
    setLoading(false); 
  },[]);

  const formattedReservationInfo = () => {
    if (!userSpec.welfareBookStartDate || !userSpec.welfareBookUseTime)
      return "";
    return `${userSpec.welfareBookStartDate}  /  ` + welfareTime();
  };

  const welfareName = () => {
    switch (userSpec.welfareNo) {
      case 1:
        return "일상 가사 돌봄";
      case 2:
        return "가정 간병 돌봄";  
      case 3:
        return "한울 돌봄";
      default:
        return null;
    }
};

const welfareTime = () => {
  switch (userSpec.welfareBookUseTime) {
    case 1:
      return "3시간 (09:00 ~ 12:00)";
    case 2:
      return "6시간 (09:00 ~ 15:00)";  
    case 3:
      return "9시간 (09:00 ~ 18:00)";
    case 4:
      return "1개월";
    case 5:
      return "2개월";
    case 6:
      return "3개월";
    case 7:
      return "4개월";
    case 8:
      return "5개월";
    case 9:
      return "6개월";
    default:
      return null;
  }
};

  const goSetPW = () => {
    navigate("/welfare-input/pay");
  };


  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatGender = (gender) => {
    if (gender === 1) {
      return "남성";
    } else if (gender === 2) {
      return "여성";
    } else {
      return "";
    }
  };

  if (loading) {
    return <div>로딩중입니다...</div>; // 로딩 중일 때 표시할 내용
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles["main-container"]}>
        <div className={styles["infomation-container"]}>
          <p className={styles.infomation}>입력하신 정보가</p>
          <p className={styles.infomation}>맞는지 확인 해주세요</p>
        </div>

        <div className={styles["spec-container"]}>
          <p className={styles["spec-info"]}>이름</p>
          <input
            className={styles["spec-check"]}
            type="text"
            placeholder="이름"
            value={userSpec.protegeUserName || userSpec.userName || ""}
            disabled
          />

          <p className={styles["spec-info"]}>생년월일</p>
          <input
            className={styles["spec-check"]}
            type="date"
            placeholder="생년월일"
            value={
              userSpec.userBirth ? formatDate(userSpec.userBirth) : (userSpec.protegeBirth ? formatDate(userSpec.protegeBirth) : "")
          }
          
            disabled
          />

          <p className={styles["spec-info"]}>성별</p>
          <input
            className={styles["spec-check"]}
            type="text"
            placeholder="성별"
            value={
              formatGender(userSpec.userGender || userSpec.protegeGender) || ""
            }
            disabled
          />
          <p className={styles["spec-info"]}>주소</p>
          <input
            className={styles["spec-check"]}
            type="text"
            placeholder="등록된 주소가 없습니다."
            value={
              (userSpec.protegeAddress && userSpec.protegeAddressDetail
                ? `${userSpec.protegeAddress} ${userSpec.protegeAddressDetail}`
                : (userSpec.userAddress && userSpec.userAddressDetail
                  ? `${userSpec.userAddress} ${userSpec.userAddressDetail}`
                  : ""))
            }
            disabled
          />


          <p className={styles["spec-info"]}>신체</p>
          <input
            className={styles["spec-check-hw"]}
            type="number"
            placeholder="키"
            value={userSpec.userHeight || userSpec.protegeHeight}
            disabled
          />

          <span className={styles.hw}>cm</span>
          <input
            className={styles["spec-check-hw"]}
            type="number"
            placeholder="몸무게"
            value={userSpec.userWeight || userSpec.protegeWeight}
            disabled
          />

          <span className={styles.hw}>kg</span>

          <p className={styles["spec-info"]}>질병</p>
          <input
            className={`${styles["spec-check"]} ${styles.disease}`}
            type="text"
            placeholder="질병 내역이 없습니다."
            value={userSpec.protegeDisease || userSpec.userDisease || ""}
            disabled
          />

          <p className={styles["spec-info"]}>예약 정보</p>
          <input
            className={`${styles["spec-check"]} ${styles.last} ${styles.first}`}
            type="text"
            placeholder="정보 없음"
            value={welfareName()}
            disabled
          />
          <input
            className={`${styles["spec-check"]} ${styles.last}`}
            type="text"
            placeholder="정보 없음"
            value={formattedReservationInfo()}
            disabled
          />
        </div>

        <div
          className={`${styles["main-section"]} ${styles["go-password"]}`}
          onClick={goSetPW}
        >
          <p className={`${styles["main-text"]} ${styles["go-password-text"]}`}>
            다음
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelfareCheckSpec;
