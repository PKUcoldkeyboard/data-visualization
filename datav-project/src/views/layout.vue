<template>
    <div class="wrapper">
        <div class="nav">
            <div>
                <router-link to="/datav/full-screen-container">全屏容器</router-link>
            </div>
            <div>
                <router-link to="/datav/loading">Loading加载</router-link>
            </div>
            <div>
                <router-link to="/datav/border-box">边框</router-link>
            </div>
            <div>
                <router-link to="/datav/decoration">装饰</router-link>
            </div>
            <div>
                <router-link to="/datav/chart">图表</router-link>
            </div>
            <div>
                <router-link to="/datav/active-ring-chart">动态环图</router-link>
            </div>
            <div>
                <router-link to="/datav/capsule-chart">胶囊状图</router-link>
            </div>
            <div>
                <router-link to="/datav/water-level-pond">水位图</router-link>
            </div>
            <div>
                <router-link to="/datav/percent-pond">进度池</router-link>
            </div>
            <div>
                <router-link to="/datav/flyline-chart">飞线图</router-link>
            </div>
            <div>
                <router-link to="/datav/flyline-chart-enhanced">飞线图增强版</router-link>
            </div>
            <div>
                <router-link to="/datav/conical-column-chart">锥形柱图</router-link>
            </div>
            <div>
                <router-link to="/datav/digital-flop">数字翻牌器</router-link>
            </div>
            <div>
                <router-link to="/datav/scroll-board">轮播表</router-link>
            </div>
            <div>
                <router-link to="/datav/scroll-ranking-board">排名轮播表</router-link>
            </div>
            <div>
                <router-link to="/datav/demo">demo演示</router-link>
            </div>
        </div>
        <div class="app-main">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style>
body {
    background: rgb(40, 44, 52);
}

.wrapper {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.nav {
    margin-top: 24px;
    width: 960px;
    height: 200px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
}

.nav div {
    width: 192px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav div a {
    text-decoration: none;
    color: #e2777a;
}

.app-main {
    min-height: 100px;
    margin-top: 60px;
    width: 960px;
}
</style>