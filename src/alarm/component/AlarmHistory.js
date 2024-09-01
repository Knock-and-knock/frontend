import React, { useEffect, useState } from 'react';
import 'alarm/component/AlarmHistory.css';
import { call } from 'login/service/ApiService';
import AlarmDetailModal from './AlarmDetailModal';

function AlarmHistory({alarmList}) {

    const [selectedAlarm, setSelectedAlarm] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열기 핸들러
    const handleOpenModal = (alarm) => {
        setSelectedAlarm(alarm);
        setIsOpen(true);
    };

    // 모달 닫기 핸들러
    const closeModal = () => {
        setIsOpen(false);
        setSelectedAlarm(null); // 모달이 닫힐 때 선택된 알람 초기화
    };

    // 모달 상태에 따라 body 스크롤 설정
    useEffect(() => {
        document.body.classList.toggle("unscrollable", isOpen);
    }, [isOpen]);

    

    let previousDate = '';

    // 날짜와 시간 포맷팅 함수
    const formatDateTime = (dateTimeStr) => {
        const [datePart, timePart] = dateTimeStr.split(' ');
        return {
            date: datePart, // 날짜 부분
            time: timePart ? timePart.split('.')[0] : '' // 시간 부분 (마지막 '.0' 제거)
        };
    };

    // 시간 차이를 계산하는 함수
    const getRelativeTime = (dateTimeStr) => {
        const now = new Date();
        const notificationTime = new Date(dateTimeStr);
        const differenceInSeconds = Math.floor((now - notificationTime) / 1000);

        if (differenceInSeconds < 60) return `${differenceInSeconds}초 전`;
        if (differenceInSeconds < 3600) return `${Math.floor(differenceInSeconds / 60)}분 전`;
        if (differenceInSeconds < 86400) return `${Math.floor(differenceInSeconds / 3600)}시간 전`;

        // 1일 이상이면 날짜와 시간을 표시
        const { time } = formatDateTime(dateTimeStr);
        return time;
    };

    return (
        <>
            {alarmList.map((alarm, index) => {
                const { date, time } = formatDateTime(alarm.notificationDateTime);

                // 날짜가 이전 날짜와 다른 경우에만 날짜를 표시
                const showDate = date !== previousDate;
                previousDate = date; // 현재 날짜를 이전 날짜로 업데이트

                // 오늘 날짜인지 확인
                const isToday = date === new Date().toISOString().split('T')[0];
                const displayTime = isToday ? getRelativeTime(alarm.notificationDateTime) : time;

                return (
                    <div key={index} className='alarmHistory' onClick={() => handleOpenModal(alarm)}>
                        {showDate && <p className='alarm-date'>{date}</p>}
                        <div className='alarmHistory-content'>
                            <p className='alarm-text'>{alarm.notificationTitle}</p>
                            {!alarm.notificationIsCheck && <div className='alarm-circle' />}
                            <p className='alarm-time'>{displayTime}</p> {/* 오늘일 때 상대 시간 표시, 아닐 때 시간만 표시 */}
                        </div>
                    </div>
                );
            })}
            {selectedAlarm && (
                <AlarmDetailModal
                    notificationNo={selectedAlarm.notificationNo}
                    isOpen={isOpen}
                    closeModal={closeModal}
                />
            )}
        </>
    );
}

export default AlarmHistory;