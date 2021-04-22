<template>
  <div>
      <div class="text"><p>百分比展示</p></div>
  		<dv-active-ring-chart :config="config1" style="width:400px;align:'center';height:400px" />
      <br><br>
      <div class="text"><p>原始值展示</p></div>
      <dv-active-ring-chart :config="config2" style="width:400px;align:'center';height:400px" />
      <br><br>
      <div class="text"><p>调整线条粗细</p></div>
      <dv-active-ring-chart :config="config3" style="width:400px;align:'center';height:400px" />
  </div>
</template>

<script>
  export default{
  data(){return { 
  config1:{data:[
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
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ],
  },
  
  config2:{radius: '40%',
  activeRadius: '45%',
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
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ],
  digitalFlopStyle: {
    fontSize: 20
  },
  showOriginValue: true
  },

  config3:{data:[
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
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ],
  lineWidth: 10
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
    height: 80px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>