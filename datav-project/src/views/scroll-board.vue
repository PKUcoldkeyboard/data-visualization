<template>
    <div>
        <div class="text">
            <p>基本轮播表</p>
        </div>
        <dv-scroll-board :config="config1" style="width:600px;height:300px" />
        <br><br>
        <div class="text">
            <p>加上表头和行号</p>
        </div>
        <dv-scroll-board :config="config2" style="width:600px;height:300px" />
        <br><br>
        <div class="text">
            <p>整页轮播</p>
        </div>
        <dv-scroll-board :config="config3" style="width:600px;height:300px" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            config1: {
                data: [
                    ['CZ6902', '北京', '长沙'],
                    ['CZ2090', '上海', '成都'],
                    ['CA3948', '乌鲁木齐', '北京'],
                    ['CA5435', '成都', '北京'],
                    ['CZ5642', '长沙', '贵州'],
                    ['MU8547', '北京', '乌鲁木齐'],
                    ['MU3757', '贵州', '成都'],
                    ['CA5946', '上海', '北京'],
                    ['CZ2847', '辽宁', '成都'],
                    ['MU5836', '乌鲁木齐', '上海']
                ]
            },

            config2: {
                header: ['航班号', '出发', '到达'],
                data: [
                    ['CZ6902', '北京', '长沙'],
                    ['CZ2090', '上海', '成都'],
                    ['CA3948', '乌鲁木齐', '北京'],
                    ['CA5435', '成都', '北京'],
                    ['CZ5642', '长沙', '贵州'],
                    ['MU8547', '北京', '乌鲁木齐'],
                    ['MU3757', '贵州', '成都'],
                    ['CA5946', '上海', '北京'],
                    ['CZ2847', '辽宁', '成都'],
                    ['MU5836', '乌鲁木齐', '上海']
                ],
                index: true,
                columnWidth: [50],
                align: ['center']
            },

            config3: {
                header: ['航班号', '出发', '到达'],
                data: [
                    ['CZ6902', '北京', '长沙'],
                    ['CZ2090', '上海', '成都'],
                    ['CA3948', '乌鲁木齐', '北京'],
                    ['CA5435', '成都', '北京'],
                    ['CZ5642', '长沙', '贵州'],
                    ['MU8547', '北京', '乌鲁木齐'],
                    ['MU3757', '贵州', '成都'],
                    ['CA5946', '上海', '北京'],
                    ['CZ2847', '辽宁', '成都'],
                    ['MU5836', '乌鲁木齐', '上海']
                ],
                index: true,
                columnWidth: [50],
                align: ['center'],
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