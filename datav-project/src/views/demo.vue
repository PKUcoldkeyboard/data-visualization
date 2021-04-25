<template>
    <div>
        <dv-border-box-11 title="高校数据可视化">
            <dv-active-ring-chart :config="config1" style="width:400px;height:400px;" />
            <dv-conical-column-chart :config="config" style="width:500px;height:250px;" />
            <dv-capsule-chart :config="configData" style="width:800px; height:200px" />
        </dv-border-box-11>
        <br><br>
        <dv-flyline-chart-enhanced :config="configLink" :dev="true" style="width:960px; height:600px" />
    </div>
</template>
<script>
import axios from 'axios'
import { getData } from '@/utils/request'
export default {
    data() {
        return {
            config1: {},
            config: {},
            configData: {},
            configLink: {}
        }
    },
    created() {
        axios.get('/data/elyar_data.json').then(res => {
            this.config1 = res.data
            this.config1.radius = '45%'
            this.config1.activeRadius = '55%'
            this.config1.lineWidth = 25
            this.config1.digitalFlopStyle = {
                fontSize: 20,
                textAlign: "left"
            }
        })
        getData().then(res => {
            let mydata = [];
            // console.log(res.data.nodes)
            for (var i = 0; i < res.data.nodes.length; i++) {
                if (res.data.nodes[i].weight > 50) {
                    mydata.push(res.data.nodes[i])
                }
            }
            mydata = JSON.parse(JSON.stringify(mydata).replace(/id/g, "name"));
            mydata = JSON.parse(JSON.stringify(mydata).replace(/weight/g, "value"));
            mydata = {
                data: mydata,
                unit: 'weight',
                showValue: true,
            }
            this.configData = mydata;
            console.log(mydata)
        })
        axios.get('/data/elyar_data.json').then(res => {
            this.config = res.data
            this.config.showValue = 'true'
            this.config.fontSize = 20
            this.config.img = [
                'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
                'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
            ]
        })
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
                line.push({ source: mydata[i].source, target: mydata[i].target });
                if (college.indexOf(mydata[i].source) == -1) {
                    college.push(mydata[i].source);
                }
                if (college.indexOf(mydata[i].target) == -1) {
                    college.push(mydata[i].target);
                }
            }
            console.log(college)
            college = [
                { name: "University of California - Berkeley", coordinate: [0.74, 0.32] },
                { name: "Carnegie Mellon University", coordinate: [0.89, 0.30] },
                { name: "Massachusetts Institute of Technology", coordinate: [0.92, 0.29] },
                { name: "University of Illinois at Urbana-Champaign", coordinate: [0.86, 0.29] },
                { name: "University of California - San Diego", coordinate: [0.76, 0.34] },
                { name: "Stanford University", coordinate: [0.74, 0.32] },
                { name: "University of Washington", coordinate: [0.74, 0.26] },
                { name: "Cornell University", coordinate: [0.90, 0.29] },
                { name: "University of Michigan", coordinate: [0.87, 0.28] },
                { name: "Georgia Institute of Technology", coordinate: [0.87, 0.34] },
                { name: "Hebrew University of Jerusalem", coordinate: [0.04, 0.35] },
                { name: "Israel Institute of Technology", coordinate: [0.04, 0.34] },
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
.border-box-content{
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
}
</style>