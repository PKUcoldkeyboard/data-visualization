<template>
  <div>
  	<div class="button" @click="changeConfig"><p>切换数据</p></div>
    <br><br>
    <dv-digital-flop :config="config" style="width:150px;height:75px;" />
  </div>
</template>

<script>
export default {
  data() {
        return {
            config: {
                number: [100],
                content: '{nt}个'
            },
            first: true,
            second: false,
            third:false
        }
    },
    methods: {
        changeConfig() {
            if (this.first) {
                this.config = {
                    number: [555],
                    content: '{nt}个'
                };
                this.first = false;
                this.second = true
            } else if(this.second){
                this.config = {
                    number: [100],
                    content: '{nt}个'
                };
                this.second = false;
                this.third = true
            }
            else if(this.third){
                this.config = {
                    number: [999],
                    content: '{nt}个'
                };
                this.third = false;
                this.first = true
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
.button {
  cursor: pointer;
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