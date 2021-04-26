<template>
    <div>
        <div class="text">基本示例</div>
        <dv-capsule-chart :config="config1" style="width:700px; height:200px" />
        <br><br>
        <div class="text">显示单位</div>
        <dv-capsule-chart :config="config2" style="width:700px; height:200px" />
        <br><br>
        <div class="text">改变颜色</div>
        <dv-capsule-chart :config="config3" style="width:700px; height:200px" />
        <br><br>
        <div class="text">显示数值</div>
        <dv-capsule-chart :config="config4" style="width:700px; height:200px" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            config1: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ],
            },
            config2: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ],
                unit: '单位',
            },
            config3: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ],
                unit: '单位',
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            },
            config4: {
                data: [{
                        name: '南阳',
                        value: 167
                    },
                    {
                        name: '周口',
                        value: 67
                    },
                    {
                        name: '漯河',
                        value: 123
                    },
                    {
                        name: '郑州',
                        value: 55
                    },
                    {
                        name: '西峡',
                        value: 98
                    }
                ],
                unit: '单位',
                colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
                showValue: true
            },
        }
    }
}
</script>
<style>
div {
    margin: 0 0;
}

.dv-capsule-chart {
    padding-left: 280px;
}

.text {
    margin: 0 auto;
    font-size: 24px;
    width: 200px;
    height: 50px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>