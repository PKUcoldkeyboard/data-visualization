<template>
    <div>
        <div class="text">
            <p>排序轮播表</p>
        </div>
        <dv-scroll-ranking-board :config="config1" style="width:600px;height:300px" />
        <br><br>
        <div class="text">
            <p>整页轮播</p>
        </div>
        <dv-scroll-ranking-board :config="config2" style="width:600px;height:300px" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            config1: {
                data: [{
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    },
                    {
                        name: '信阳',
                        value: 45
                    },
                    {
                        name: '漯河',
                        value: 29
                    }
                ]
            },

            config2: {
                data: [{
                        name: '周口',
                        value: 55
                    },
                    {
                        name: '南阳',
                        value: 120
                    },
                    {
                        name: '西峡',
                        value: 78
                    },
                    {
                        name: '驻马店',
                        value: 66
                    },
                    {
                        name: '新乡',
                        value: 80
                    },
                    {
                        name: '信阳',
                        value: 45
                    },
                    {
                        name: '漯河',
                        value: 29
                    }
                ],
                carousel: 'page',
                waitTime: 4000
            }
        }
    }
}
</script>
<style>
div {
    margin: 0 auto;
    font-size: 16px;
}

.text {
    font-size: 24px;
    width: 200px;
    height: 80px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>