<template>
    <div class="container">
        <div class="item">
            <dv-charts :option="option1" />
        </div>
        <div class="item">
            <dv-charts :option="option2" />
        </div>
        <div class="item">
            <dv-charts :option="option3" />
        </div>
        <div class="item">
            <dv-charts :option="option4" />
        </div>
        <div class="item">
            <dv-charts :option="option5" />
        </div>
        <div class="item">
            <dv-charts :option="option6" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            option1: {
                title: {
                    text: '周销售额趋势'
                },
                xAxis: {
                    name: '第一周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [{
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line'
                }]
            },
            option2: {
                title: {
                    text: '周销售额趋势'
                },
                xAxis: {
                    name: '第一周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [{
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'bar',
                }]
            },
            option3: {
                title: {
                    text: '畅销饮料占比饼状图'
                },
                series: [{
                    type: 'pie',
                    data: [
                        { name: '可口可乐', value: 93 },
                        { name: '百事可乐', value: 32 },
                        { name: '哇哈哈', value: 65 },
                        { name: '康师傅', value: 44 },
                        { name: '统一', value: 52 },
                    ],
                    insideLabel: {
                        show: true
                    }
                }]
            },
            option4: {
                radar: {
                    indicator: [
                        { name: '西峡', max: 300 },
                        { name: '周口', max: 300 },
                        { name: '南阳', max: 300 },
                        { name: '驻马店', max: 300 },
                        { name: '郑州', max: 300 },
                        { name: '洛阳', max: 300 }
                    ]
                },
                series: [{
                    type: 'radar',
                    data: [111, 256, 178, 152, 266, 132]
                }]
            },
            option5: {
                title: {
                    text: '剩余油量表'
                },
                series: [{
                    type: 'gauge',
                    data: [{ name: 'itemA', value: 55 }],
                    axisLabel: {
                        formatter: '{value}%'
                    },
                    animationCurve: 'easeInOutBack'
                }]
            },
            option6: {
                series: [{
                    type: 'gauge',
                    startAngle: -Math.PI / 2,
                    endAngle: Math.PI * 1.5,
                    arcLineWidth: 25,
                    data: [
                        { name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
                    ],
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    dataItemStyle: {
                        lineCap: 'round'
                    },
                    details: {
                        show: true,
                        formatter: '{value}%',
                        style: {
                            fill: '#1ed3e5',
                            fontSize: 35
                        }
                    }
                }]
            }
        }
    }
}
</script>
<style>
div {
    margin: 0 auto;
}

.text {
    font-size: 24px;
    width: 200px;
    height: 40px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.container {
    width: 960px;
    height: 960px;
    background: white;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
}

.item {
    width: 450px;
    height: 300px;
}
</style>