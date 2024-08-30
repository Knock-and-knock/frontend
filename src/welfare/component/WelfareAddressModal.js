import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareInputAddress.module.css'; // CSS 모듈 import
import glasses from "image/glasses.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';
import { useSpecHook } from 'welfare/component/WelfareInputTotal';

function WelfareAddressModal() {
    const navigate = useNavigate();

    const { userSpec, setUserSpec, handlechange } = useSpecHook();
    const { address, detailAddress } = userSpec;

    useEffect(() => {
        if (!window.daum || !window.daum.Postcode) {
            const script = document.createElement('script');
            script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
            script.async = true;
            script.onload = () => console.log("Daum Postcode script loaded successfully");
            script.onerror = () => alert("주소 검색 기능을 사용할 수 없습니다. 다시 시도해 주세요.");
            document.head.appendChild(script);
        }
    }, []);

    const openAddressSearch = () => {
        if (window.daum && window.daum.Postcode) {
            new window.daum.Postcode({
                oncomplete: function(data) {
                    console.log(data);
                    setUserSpec({ ...userSpec, address: data.address });
                    document.getElementById('detail-address-input').focus();
                }
            }).open();
        } else {
            alert("주소 검색 기능을 사용할 수 없습니다. 다시 시도해 주세요.");
        }
    };

    const style1 = { backgroundColor: '#80BAFF', cursor: 'pointer' };
    const style2 = { backgroundColor: 'rgba(128, 186, 255, 0.5)', cursor: 'not-allowed' };
    const [style, setStyle] = useState(style2); // 기본 스타일을 비활성화로 설정

    useEffect(() => {
        if (isFormComplete()) {
            setStyle(style1);
        } else {
            setStyle(style2);
        }
    }, [address, detailAddress]);

    const isFormComplete = () => {
        return address && address.trim() !== '' && detailAddress && detailAddress.trim() !== '';
    };

    const goInputDisease = () => {
        if (isFormComplete()) {
            const fullAddress = `${address} ${detailAddress}`.trim();
            setUserSpec({ ...userSpec, address: fullAddress }); // 합쳐진 주소를 저장
            navigate('/welfare-input/disease');
        }
    };

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles["main-container"]}>
                <div className={styles["infomation-container"]}>
                    <p className={styles.infomation}>집주소를</p>
                    <p className={styles.infomation}>입력해 주세요</p>
                </div>

                <div className={styles["address-container"]}>
                    <div className={styles["address-section"]} onClick={openAddressSearch}>
                        <input 
                            onChange={handlechange}
                            className={styles["input-address"]} 
                            type="text" 
                            name='address'
                            placeholder="도로명, 지번, 건물명 검색" 
                            value={address || ""} 
                            readOnly
                        />
                        <img src={glasses} alt="돋보기" className={styles["glasses-icon"]} />
                    </div>
                    <input 
                        id="detail-address-input"
                        onChange={handlechange}
                        className={styles["input-address-detail"]} 
                        type="text" 
                        name='detailAddress'
                        placeholder="상세 주소" 
                        value={detailAddress || ""}
                    />
                </div>

                <div 
                    className={`${styles["main-section"]} ${styles["go-input-disease"]}`} 
                    onClick={goInputDisease}
                    style={style}
                >
                    <p className={`${styles["main-text"]} ${styles["go-input-disease-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareAddressModal;
