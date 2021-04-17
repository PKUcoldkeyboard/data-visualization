<template>
    <div>
    	<div class="button" @click="changeConfig"><p>切换数据</p></div>
        <dv-digital-flop :config="config" style="width:100px;height:50px;" />
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
            first: true
        }
    },
    methods: {
        changeConfig() {
            if (this.first) {
                this.config = {
                    number: [999],
                    content: '{nt}个'
                };
                this.first = false;
            } else {
                this.config = {
                    number: [100],
                    content: '{nt}个'
                };
                this.first = true;
            }
        }
    }
}
</script>
<style>
div {
	margin:0 auto;
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