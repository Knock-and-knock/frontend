import React, { useState } from 'react';
import 'consumeReport/ConsumeReport.css';
import Chart from "react-apexcharts";

function ConsumeReportInfo() {
    const [selectedFilter, setSelectedFilter] = useState('personal');
    const [selectedData, setSelectedData] = useState(null); // 클릭된 데이터를 저장하기 위한 상태
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // 툴팁 위치 상태

    // 숫자를 세 자리마다 쉼표로 구분하는 포맷터
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const donutData = {
        series: [28900, 38900, 18900, 30900, 29900, 29900, 9900],
        options: {
            chart: {
                type: 'donut',
                fontFamily: 'inherit',
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        const dataIndex = config.dataPointIndex;
                        const label = donutData.options.labels[dataIndex];
                        const value = donutData.series[dataIndex];
                        const color = donutData.options.fill.colors[dataIndex]; // 여기에서 수정

                        const { clientX, clientY } = event; // 클릭 시 마우스 위치

                        if (selectedData && selectedData.label === label) {
                            // 이미 선택된 항목을 다시 클릭하면 툴팁을 숨김
                            setSelectedData(null);
                        } else {
                            // 클릭된 데이터에 대한 정보를 설정하고 툴팁 위치와 색상을 업데이트
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
                enabled: false // 기본 툴팁을 비활성화
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '30%',
                    }
                }
            },
            labels: ["🍴식비", "👜잡화", "🚍교통", "🏠생활", "🛒쇼핑", "🍷유흥", "💰기타"],
            dataLabels: {
                style: {
                    fontSize: '14px',
                    fontWeight: 'normal',
                },
            },
            fill: {
                colors: ['#6DD193', '#F56A71', '#E9A260', '#66B1B5', '#4AADE5', '#9B7F9E', '#625B8B']
            }
        },
    };

    const barData = {
        series: [{
            name: "지출",
            data: [28900, 38900, 18900, 30900, 29900, 29900, 9900]
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
                categories: ["🍴식비", "👜잡화", "🚍교통", "🏠생활", "🛒쇼핑", "🍷유흥", "💰기타"],
                labels: {
                    show: false // 눈금 제거
                },
                axisBorder: {
                    show: false // x축의 회색 선 제거
                },
                axisTicks: {
                    show: false // x축의 틱 제거
                },
                tickAmount: Math.max(...[28900, 38900, 18900, 30900, 29900, 29900, 9900]) / 10 // 최대값을 10단위로 나눔
            },
            yaxis: {
                categories: ["🍴식비", "👜잡화", "🚍교통", "🏠생활", "🛒쇼핑", "🍷유흥", "💰기타"],
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
    
    
    
    

    const renderChart = () => {
        switch (selectedFilter) {
            case 'personal':
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

            case 'family':
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
            default:
                return null;
        }
    };

    const handleClick = (id) => {
        setSelectedFilter(id);
    };

    return (
        <div className='consume-report-price-container'>
            <div className='consume-report-price-section'>
                <span className='total-price'>총 <span className='go-mainred'>{formatPrice(177400)}</span> 원</span>
                <div className='report-search-filter'>
                    <span
                        style={{ fontWeight: selectedFilter === 'personal' ? 'bold' : 'normal' }}
                        onClick={() => handleClick('personal')}>개인</span>
                    <span
                        style={{ fontWeight: selectedFilter === 'family' ? 'bold' : 'normal' }}
                        onClick={() => handleClick('family')}>가족</span>
                </div>
            </div>
            {renderChart()}
        </div>
    );
}

export default ConsumeReportInfo;
