<template>
    <div>
        <div class="text">矩形水位图</div>
        <div class="text2">默认配置</div>
        <dv-water-level-pond :config="config1" style="width:150px;height:200px" />
        <br><br>
        <div class="text">圆角水位图</div>
        <div class="text2">设置了水位图形状以及波浪数量、高度、透明度，其他默认</div>
        <dv-water-level-pond :config="config2" style="width:150px;height:200px" />
        <br><br>
        <div class="text">圆形水位图</div>
        <div class="text2">设置了水位图形状、颜色和信息格式，其他默认</div>
        <dv-water-level-pond :config="config3" style="width:150px;height:200px" />
        <br><br>
    </div>
</template>
<script>
export default {
    data() {
        return {
            config1: {
                data: [66]
            },
            config2: {
                data: [45, 66],
                shape: 'roundRect',
                waveNum: 5,
                waveHeight: 20,
                waveOpacity: 0.2
            },
            config3: {
                data: [28, 45, 66],
                shape: 'round',
                colors: ['#ffff80', '#80ff00'],
                formatter: '占比:{value}%'
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

.text2 {
    font-size: 16px;
    height: 30px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>