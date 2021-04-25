<template>
  <div>
    <dv-decoration-7 style="width:200px;height:50px;color:#fff; font-size:20px"> Demo </dv-decoration-7>
    <!-- <div class="text">示例</div> -->
    <dv-flyline-chart-enhanced :config="configLink" :dev="true" style="width:1000px; height:680px" />
  </div>
</template>

<script>
  import {getData} from '@/utils/request'
  export default{
    data() {
      return {
        
        configLink: {}
      }
    },
    created() {
      getData().then(res => {
        // console.log(res.data.links)
        let mydata = [];
        for (var i = 0; i < res.data.links.length; i++) {
          if (res.data.links[i].weight > 10 && res.data.links[i].source != res.data.links[i].target) {
            mydata.push(res.data.links[i]);
          }
        }
        console.log(mydata)
        let line = [];
        let college = [];
        for (var i = 0; i < mydata.length; i++) {
          line.push({source:mydata[i].source, target:mydata[i].target});
          if (college.indexOf(mydata[i].source) == -1) {
            college.push(mydata[i].source);
          }
          if (college.indexOf(mydata[i].target) == -1) {
            college.push(mydata[i].target);
          }
        }
        console.log(college)
        college = [
          { name:"University of California - Berkeley", coordinate:[0.74, 0.32] },
          { name:"Carnegie Mellon University", coordinate:[0.89, 0.30] },
          { name:"Massachusetts Institute of Technology", coordinate:[0.92, 0.29] },
          { name:"University of Illinois at Urbana-Champaign", coordinate:[0.86, 0.29]},
          { name:"University of California - San Diego", coordinate:[0.76, 0.34] },
          { name:"Stanford University", coordinate:[0.74, 0.32] },
          { name:"University of Washington", coordinate:[0.74, 0.26] },
          { name:"Cornell University", coordinate:[0.90, 0.29] },
          { name:"University of Michigan", coordinate:[0.87, 0.28] },
          { name:"Georgia Institute of Technology", coordinate:[0.87, 0.34] },
          { name:"Hebrew University of Jerusalem", coordinate:[0.04, 0.35] },
          { name:"Israel Institute of Technology", coordinate:[0.04, 0.34] },
        ];
        this.configLink = {
          points: college,
          lines: line,
          bgImgSrc: 'https://cuterwrite.oss-cn-beijing.aliyuncs.com/img/image-20210425220712798.png',
          icon: {
            show: true,
            src: 'http://datav.jiaminghi.com/img/flylineChart/mapPoint.png'
          },
          text: {
            color: '#0000a0',
            show: true,
          },
          line: {
            color: '#00a000',
            orbitColor: '#00a000'
          },
          k: 0.5,
        }
      })
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