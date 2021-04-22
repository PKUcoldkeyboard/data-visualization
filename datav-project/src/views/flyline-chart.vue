<template>
  <div>
    <div class="text">基本示例</div>
    <dv-flyline-chart :config="config1" style="width:800px;height:800px;" />
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
          bgImgUrl: '..\\img\\flyline-chart\\map.jpg',
          centerPointImg: {
            url: '../datav-project/img/flyline-chart/mapCenterPoint.png'
          },
          pointsImg: {
            url: '../img/flyline-chart/mapPoint.png'
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