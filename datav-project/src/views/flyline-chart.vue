<template>
  <div>
    <div class="text">基本示例</div>
    <dv-flyline-chart :config="config1" :dev="true" style="width:800px;height:800px;" />
    <br>
    <div class="text">附带图标</div>
    <dv-flyline-chart :config="config2" :dev="true" style="width:800px;height:800px;" />
    <br>
    <div class="text">附带文本</div>
    <dv-flyline-chart :config="config3" :dev="true" style="width:800px;height:800px;" />
    <br>
    <div class="text">凹聚飞线</div>
    <dv-flyline-chart :config="config4" :dev="true" style="width:800px;height:800px;" />
  </div>
</template>

<script>
  export default{
    data() {
      return {
        config1: {
          centerPoint: [0.48, 0.35],
          points: [
            [0.52, 0.23],
            [0.43, 0.29],
            [0.59, 0.35],
            [0.53, 0.47],
            [0.45, 0.54],
            [0.36, 0.38],
            [0.62, 0.55],
            [0.56, 0.56],
            [0.37, 0.66],
            [0.55, 0.81],
            [0.55, 0.67],
            [0.37, 0.29],
            [0.20, 0.36],
            [0.76, 0.41],
            [0.59, 0.18],
            [0.68, 0.17],
            [0.59, 0.10]
          ],
          bgImgUrl: "http://datav.jiaminghi.com/img/flylineChart/map.jpg",
        },
        config2: {
          centerPoint: [0.48, 0.35],
          points: [
            [0.52, 0.23],
            [0.43, 0.29],
            [0.59, 0.35],
            [0.53, 0.47],
            [0.45, 0.54],
            [0.36, 0.38],
            [0.62, 0.55],
            [0.56, 0.56],
            [0.37, 0.66],
            [0.55, 0.81],
            [0.55, 0.67],
            [0.37, 0.29],
            [0.20, 0.36],
            [0.76, 0.41],
            [0.59, 0.18],
            [0.68, 0.17],
            [0.59, 0.10]
          ],
          bgImgUrl: 'http://datav.jiaminghi.com/img/flylineChart/map.jpg',
          centerPointImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png'
          },
          pointsImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          }
        },
        config3: {
          centerPoint: [0.48, 0.35],
          points: [
            {
              position: [0.52, 0.235],
              text: '新乡'
            },
            {
              position: [0.43, 0.29],
              text: '焦作'
            },
            {
              position: [0.59, 0.35],
              text: '开封'
            },
            {
              position: [0.53, 0.47],
              text: '许昌'
            },
            {
              position: [0.45, 0.54],
              text: '平顶山'
            },
            {
              position: [0.36, 0.38],
              text: '洛阳'
            },
            {
              position: [0.62, 0.55],
              text: '周口'
            },
            {
              position: [0.56, 0.56],
              text: '漯河'
            },
            {
              position: [0.37, 0.66],
              text: '南阳'
            },
            {
              position: [0.55, 0.81],
              text: '信阳'
            },
            {
              position: [0.55, 0.67],
              text: '驻马店'
            },
            {
              position: [0.37, 0.29],
              text: '济源'
            },
            {
              position: [0.20, 0.36],
              text: '三门峡'
            },
            {
              position: [0.76, 0.41],
              text: '商丘'
            },
            {
              position: [0.59, 0.18],
              text: '鹤壁'
            },
            {
              position: [0.68, 0.17],
              text: '濮阳'
            },
            {
              position: [0.59, 0.10],
              text: '安阳'
            }
          ],
          bgImgUrl: 'http://datav.jiaminghi.com/img/flylineChart/map.jpg',
          centerPointImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png'
          },
          pointsImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          }
        },
        config4: {
          centerPoint: [0.48, 0.35],
          points: [
            {
              position: [0.52, 0.235],
              text: '新乡'
            },
            {
              position: [0.43, 0.29],
              text: '焦作'
            },
            {
              position: [0.59, 0.35],
              text: '开封'
            },
            {
              position: [0.53, 0.47],
              text: '许昌'
            },
            {
              position: [0.45, 0.54],
              text: '平顶山'
            },
            {
              position: [0.36, 0.38],
              text: '洛阳'
            },
            {
              position: [0.62, 0.55],
              text: '周口'
            },
            {
              position: [0.56, 0.56],
              text: '漯河'
            },
            {
              position: [0.37, 0.66],
              text: '南阳'
            },
            {
              position: [0.55, 0.81],
              text: '信阳'
            },
            {
              position: [0.55, 0.67],
              text: '驻马店'
            },
            {
              position: [0.37, 0.29],
              text: '济源'
            },
            {
              position: [0.20, 0.36],
              text: '三门峡'
            },
            {
              position: [0.76, 0.41],
              text: '商丘'
            },
            {
              position: [0.59, 0.18],
              text: '鹤壁'
            },
            {
              position: [0.68, 0.17],
              text: '濮阳'
            },
            {
              position: [0.59, 0.10],
              text: '安阳'
            }
          ],
          k: 0.5,
          bgImgUrl: 'http://datav.jiaminghi.com/img/flylineChart/map.jpg',
          centerPointImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png'
          },
          pointsImg: {
            url: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          }
        }
      }
    }
  }
</script>
<style>
  div{
	  margin:0 auto;
  }

  .text{
    font-size:24px;
    width: 200px;
    height: 40px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>