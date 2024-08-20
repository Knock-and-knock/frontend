import React, { useState, useEffect } from 'react';
import styles from 'welfare/css/WelfareInputAddress.module.css'; // CSS 모듈 import
import glasses from "image/glasses.png";
import { useNavigate } from 'react-router-dom';
import Header from 'header/Header.js';

function WelfareInputAddress() {
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // 스크립트가 로드되었는지 확인
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
                    setAddress(data.address); // 주소 필드에 검색된 주소를 설정
                    document.getElementById('detail-address-input').focus(); // 상세 주소로 포커스 이동
                }
            }).open();
        } else {
            alert("주소 검색 기능을 사용할 수 없습니다. 다시 시도해 주세요.");
        }
    };

    const handleDetailAddressChange = (event) => {
        setDetailAddress(event.target.value);
    };

    const isFormComplete = () => {
        return address.trim() !== '' && detailAddress.trim() !== '';
    };

    const goInputDisease = () => {
        if (isFormComplete()) {
            navigate('/welfare-input-disease');
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
                            className={styles["input-address"]} 
                            type="text" 
                            placeholder="도로명, 지번, 건물명 검색" 
                            value={address}
                            readOnly
                        />
                        <img src={glasses} alt="돋보기" className={styles["glasses-icon"]} />
                    </div>
                    <input 
                        id="detail-address-input"
                        className={styles["input-address-detail"]} 
                        type="text" 
                        placeholder="상세 주소" 
                        value={detailAddress}
                        onChange={handleDetailAddressChange}
                    />
                </div>

                <div 
                    className={`${styles["main-section"]} ${styles["go-input-disease"]}`} 
                    onClick={goInputDisease}
                    style={{
                        backgroundColor: isFormComplete() ? '#80BAFF' : 'rgba(128, 186, 255, 0.5)',
                        cursor: isFormComplete() ? 'pointer' : 'not-allowed',
                    }}
                >
                    <p className={`${styles["main-text"]} ${styles["go-input-disease-text"]}`}>다음</p>
                </div>
            </div>
        </div>
    );
}

export default WelfareInputAddress;
