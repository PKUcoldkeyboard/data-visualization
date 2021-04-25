<template>
  <div>
    <dv-decoration-11 style="width:300px;height:70px;" class="text">dv-decoration-11</dv-decoration-11>
    <br>
    <dv-capsule-chart :config="configData" style="width:800px; height:200px" />
  </div>
</template>

<script>
  import {getData} from '@/utils/request'
  export default {
  data() { 
    return {
      configData: {}
    }
  },
  created() {
    getData().then(res => {
      let mydata = [];
      // console.log(res.data.nodes)
      for (var i = 0; i < res.data.nodes.length; i++) {
        if (res.data.nodes[i].weight > 50) {
          mydata.push(res.data.nodes[i])
        }
      }
      mydata = JSON.parse(JSON.stringify(mydata).replace(/id/g,"name"));
      mydata = JSON.parse(JSON.stringify(mydata).replace(/weight/g,"value"));
      mydata = {
        data: mydata,
        unit: 'weight',
        showValue: true,
      }
      this.configData = mydata;
      console.log(mydata)
    })
  }
}
</script>
<style>
  div{
	  margin:0 0;
  }

  .dv-capsule-chart{
    padding-left: 100px;
  }

  .text{
    margin: 0 auto;
    font-size:24px;
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