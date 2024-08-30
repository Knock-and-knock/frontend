import React, { useState, useMemo, useEffect } from 'react';
import 'consumeReport/ConsumeReport.css';
import Chart from "react-apexcharts";
import ConsumeReportDate from './ConsumeReportDate'; // 날짜 선택 컴포넌트를 불러옴
import { useLocation } from 'react-router-dom';

function ConsumeReportInfo({cardId}) {
    const [selectedFilter, setSelectedFilter] = useState('personal');
    const [selectedData, setSelectedData] = useState(null); // 클릭된 데이터를 저장하기 위한 상태
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // 툴팁 위치 상태
    const [data, setData] = useState([]); // API로부터 받은 데이터를 저장할 상태
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

    const handleDateChange = (year, month) => {
        setSelectedYear(year);
        setSelectedMonth(month);
    };

    // const location = useLocation();
    // const cardId = location.state.value;

    // 숫자를 세 자리마다 쉼표로 구분하는 포맷터
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    // API 호출 함수
    const fetchData = async () => {
        const jwt = localStorage.getItem('ACCESS_TOKEN');

        const startDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-01`;
        const lastDayOfMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        const endDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(lastDayOfMonth).padStart(2, '0')}`;

        try {
            const response = await fetch(`http://192.168.0.12:9090/api/v1/consumption/1/${startDate}/${endDate}`, {
                headers: {
                    'Authorization': 'Bearer ' + jwt, // JWT 토큰 설정
                },
            });
            const result = await response.json();
            setData(result);
            setLoading(false); // 데이터 로드 완료 후 로딩 상태 업데이트
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false); // 오류가 발생해도 로딩 상태 해제
        }
    };

    // 연도나 월이 변경될 때마다 API 호출
    useEffect(() => {
        fetchData();
    }, [selectedYear, selectedMonth]);

    // API로부터 받은 데이터를 시리즈와 레이블 형식으로 변환
    const processedData = useMemo(() => {
        const labels = data.map(item => item.categoryName);
        const series = data.map(item => item.amount);
        return { labels, series };
    }, [data]);

    const donutData = {
        series: processedData.series, // series에 있는 값 그대로 사용
        options: {
            chart: {
                type: 'donut',
                fontFamily: 'inherit',
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        const dataIndex = config.dataPointIndex;
                        const label = donutData.options.labels[dataIndex];
                        const value = donutData.series[dataIndex];
                        const color = donutData.options.fill.colors[dataIndex]; 
                        const { clientX, clientY } = event; 
                        if (selectedData && selectedData.label === label) {
                            setSelectedData(null);
                        } else {
                            setSelectedData({ label, value, color });
                            setTooltipPosition({ x: clientX, y: clientY });
                        }
                    },
                    beforeMount: function () {
                        setSelectedData(null);
                    },
                }
            },
            legend: {
                show: false
            },
            tooltip: {
                enabled: false 
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%',
                    },
                    dataLabels: {
                        minAngleToShowLabel: 0 // 각도가 0도일 때도 라벨을 표시하지 않도록 설정
                    }
                }
            },
            labels: processedData.labels,
            dataLabels: {
                style: {
                    fontSize: '14px',
                    fontWeight: 'normal',
                },
            },
            fill: {
                colors: ['#6DD193', '#F56A71', '#E9A260', '#66B1B5', '#4AADE5', '#9B7F9E', '#615EDE', '#625B8B']
            },
            noData: {
                text: '소비 내역이 없습니다.',
                align: 'center',
                fontSize: '24px', // 이거 왜 안됨??
                fontWeight: 'bold',
                verticalAlign: 'middle',
                offsetX: 0,
                offsetY: 0,
                style: {
                    color: '#2c2c2c',
                    fontSize: '14px',
                }
            }
        },
    };
    

    const barData = {
        series: [{
            name: "지출",
            data: processedData.series
        }],
        options: {
            chart: {
                type: 'bar',
                fontFamily: 'inherit',
                toolbar: {
                    show: false // 다운로드 등의 버튼을 제거
                },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    barHeight: '50%',
                    endingShape: 'rounded',
                    borderRadius: 5,
                    distributed: true, // 각 막대를 개별 색상으로 설정
                    rangeBarOverlap: true, // 막대가 겹치도록 설정
                    colors: {
                        backgroundBarColors: ['#d9d9d9'], // 모든 막대의 배경을 회색으로 설정
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 5,
                    },
                }
            },
            xaxis: {
                categories: processedData.labels,
                labels: {
                    show: false // 눈금 제거
                },
                axisBorder: {
                    show: false // x축의 회색 선 제거
                },
                axisTicks: {
                    show: false // x축의 틱 제거
                },
                tickAmount: Math.max(...processedData.series) / 10 // 최대값을 10단위로 나눔
            },
            yaxis: {
                categories: processedData.labels,
                labels: {
                    style: {
                        colors: '#2c2c2c',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }
                }
            },
            grid: {
                show: false // 그리드 라인 제거
            },
            legend: {
                show: false,
                position: 'left',
            },
            tooltip: {
                enabled: false // 기본 툴팁을 비활성화
            },
            fill: {
                colors: ['#6DD193', '#F56A71', '#E9A260', '#66B1B5', '#4AADE5', '#9B7F9E', '#625B8B'],
                opacity: 1
            },
            dataLabels: {
                enabled: true,
                formatter: (value) => `${formatPrice(value)} 원`, // 값 뒤에 ' 원'을 추가
                textAnchor: 'middle',
                offsetX: 450, // 값을 오른쪽으로 약간 이동
                style: {
                    colors: ['#2c2c2c'],
                    fontSize: '14px',
                    fontWeight: 'bold',
                },
                dropShadow: {
                    enabled: false,
                },
                position: 'right' // 값이 막대의 오른쪽 끝에 위치하도록 설정
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                    }
                },
                inactive: {
                    filter: {
                        type: 'none',
                    }
                }
            },
            colors: ['#6DD193', '#F56A71', '#E9A260', '#66B1B5', '#4AADE5', '#9B7F9E', '#625B8B'],
        }
    };

    // 합계 계산
    const totalPrice = useMemo(() => {
        return donutData.series.reduce((total, num) => total + num, 0);
    }, [donutData.series]);

    const renderChart = () => {
        if (loading) {
            return <div>Loading...</div>; // 데이터 로드 중일 때 로딩 표시
        }

        // 원래 전체, 개인, 가족 이렇게 3개의 필터가 있었으나 삭제됨
        // 하지만 바꾸기 귀찮으므로 냅두겠읍니다
        switch (selectedFilter) {
            default:
                return (
                    <div className='chart-container'>
                        <div className='circle-chart-container'>
                            <Chart
                                options={donutData.options}
                                series={donutData.series}
                                type="donut"
                            />
                        </div>
                        {selectedData && (
                            <div
                                className='tooltip'
                                style={{
                                    position: 'absolute',
                                    top: `${tooltipPosition.y}px`,
                                    left: `${tooltipPosition.x}px`,
                                    backgroundColor: selectedData.color, // 항목 색상으로 배경색 설정
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                    pointerEvents: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    zIndex: 1000
                                }}
                            >
                                <p style={{ margin: 0, fontWeight: 'bold' }}>{selectedData.label}</p>
                                <p style={{ margin: 0 }}>{formatPrice(selectedData.value)} 원</p>
                            </div>
                        )}
                        <div className='bar-chart-container'>
                            <Chart
                                options={barData.options}
                                series={barData.series}
                                type="bar"
                                height={360} // 차트의 총 높이 조정
                            />
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className='consume-report-price-container'>
            <ConsumeReportDate onDateChange={handleDateChange} />
            <div className='consume-report-price-section'>
                <span className='total-price'>총 <span className='go-mainred'>{formatPrice(totalPrice)}</span> 원</span>
            </div>
            {renderChart()}
        </div>
    );
}

export default ConsumeReportInfo;
