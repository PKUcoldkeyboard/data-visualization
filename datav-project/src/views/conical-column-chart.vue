<template>
  <div>
  	<dv-conical-column-chart :config="config" style="width:800px;height:400px;" />
  </div>
</template>

<script>
  export default{
  data(){return{
  config:{
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 71
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
      value: 35
    },
    {
      name: '漯河',
      value: 15
    }
  ],
  img: [
    'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
    'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
  ],
  showValue: true,
  fontSize:20
  }
  }}
  }
</script>
<style>
div{
	margin:0 auto;
  }

.text{
    font-size:24px;
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