<template>
    <div class="daping">
        <!--<el-button type="primary" icon="el-icon-edit" @click="getaccountelist"></el-button>-->
        <el-row class="rongqi" :gutter="20">
            <el-col :span="5" style="height: 100%;">
                <div class="grid-content bg-purple elleft">
                    <div class="box1" style="color:#fff;">
                        <p>安全运行</p>
                        <p>100天</p>
                    </div>
                    <div class="box2" style="color:#fff;">
                        <p>实时负荷(千瓦)</p>
                        <p>0.00</p>
                    </div>
                    <div class="box3" id="fuhe">
                    </div>
                    <div class="box4" style="color:#fff;">
                        <p>日总电量</p>
                        <p>0.00</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="14" style="height: 100%"><div class="grid-content bg-purple-light elmid">
                <div id="cmaps" ></div>
            </div></el-col>
            <el-col :span="5" style="height: 100%">
                <div class="grid-content bg-purple elright">
                    <div class="box1" style="color:#fff;">
                        <p>总接入量</p>
                        <p>10家</p>
                    </div>
                    <div class="box2" style="color:#fff;">
                        <p>总变压器数量</p>
                        <p>9台</p>
                    </div>
                    <div class="box3" id="niandudianliang"></div>
                    <div class="box4" style="color:#fff;">
                        <p>变压器总容量</p>
                        <p>6305KVA</p>
                    </div>
                 </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import 'echarts/map/js/china'
    export default {
        name: "Shouyedaping",
        methods:{
            getaccountelist(){

                this.req.get('/menu/list')
                    .then(res=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },

        },
        mounted(){
            var myChart = echarts.init(document.getElementById('cmaps'));
            var option = {
                title : {
                    text: '全国数据中心',
                    // subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip : {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data:['警告','正常']
                },

                // visualMap: {
                //     min: 0,
                //     max: 2500,
                //     left: 'left',
                //     top: 'bottom',
                //     text:['高','低'],           // 文本，默认为数值文本
                //     calculable : true
                // },
                toolbox: {
                    show: true,
                    orient : 'vertical',
                    left: 'right',
                    top: 'center',
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                // //地图样式设置
                // itemStyle:{
                //     normal:{
                //         label:{show:true},
                //         //设置地图区域样色
                //         areaColor:{
                //             default:'#b3c2ff'
                //         }
                //     },
                //
                // },
                series : [
                    {
                        name: '警告',
                        type: 'map',
                        mapType: 'china',
                        roam: true,
                        zoom:1, //默认显示级别
                        scaleLimit:{min:1,max:5}, // 缩放级别
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        // //地图样式设置
                        itemStyle:{
                            normal:{
                                label:{show:true},
                                //设置地图区域样色
                                areaColor:'#b3c2ff'

                            },

                        },

                        data:[
                            {name: '北京',value: Math.round(Math.random()*1000)},
                            {name: '天津',value: Math.round(Math.random()*1000)},
                            {name: '上海',value: Math.round(Math.random()*1000)},
                            {name: '重庆',value: Math.round(Math.random()*1000)},
                            {name: '河北',value: Math.round(Math.random()*1000)},
                            {name: '河南',value: Math.round(Math.random()*1000)},
                            {name: '云南',value: Math.round(Math.random()*1000)},
                            {name: '辽宁',value: Math.round(Math.random()*1000)},
                            {name: '黑龙江',value: Math.round(Math.random()*1000)},
                            {name: '湖南',value: Math.round(Math.random()*1000)},
                            {name: '安徽',value: Math.round(Math.random()*1000)},
                            {name: '山东',value: Math.round(Math.random()*1000)},
                            {name: '新疆',value: Math.round(Math.random()*1000)},
                            {name: '江苏',value: Math.round(Math.random()*1000)},
                            {name: '浙江',value: Math.round(Math.random()*1000)},
                            {name: '江西',value: Math.round(Math.random()*1000)},
                            {name: '湖北',value: Math.round(Math.random()*1000)},
                            {name: '广西',value: Math.round(Math.random()*1000)},
                            {name: '甘肃',value: Math.round(Math.random()*1000)},
                            {name: '山西',value: Math.round(Math.random()*1000)},
                            {name: '内蒙古',value: Math.round(Math.random()*1000)},
                            {name: '陕西',value: Math.round(Math.random()*1000)},
                            {name: '吉林',value: Math.round(Math.random()*1000)},
                            {name: '福建',value: Math.round(Math.random()*1000)},
                            {name: '贵州',value: Math.round(Math.random()*1000)},
                            {name: '广东',value: Math.round(Math.random()*1000)},
                            {name: '青海',value: Math.round(Math.random()*1000)},
                            {name: '西藏',value: Math.round(Math.random()*1000)},
                            {name: '四川',value: Math.round(Math.random()*1000)},
                            {name: '宁夏',value: Math.round(Math.random()*1000)},
                            {name: '海南',value: Math.round(Math.random()*1000)},
                            {name: '台湾',value: Math.round(Math.random()*1000)},
                            {name: '香港',value: Math.round(Math.random()*1000)},
                            {name: '澳门',value: Math.round(Math.random()*1000)}
                        ]
                    },
                    {
                        name: '正常',
                        type: 'map',
                        mapType: 'china',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        //地图样式设置
                        // itemStyle:{
                        //     normal:{
                        //         label:{show:true},
                        //         //设置地图区域样色
                        //         areaColor:'#b3c2ff'
                        //
                        //     },
                        //
                        // },

                        data:[
                            {name: '北京',value: Math.round(Math.random()*1000)},
                            {name: '天津',value: Math.round(Math.random()*1000)},
                            {name: '上海',value: Math.round(Math.random()*1000)},
                            {name: '重庆',value: Math.round(Math.random()*1000)},
                            {name: '河北',value: Math.round(Math.random()*1000)},
                            {name: '安徽',value: Math.round(Math.random()*1000)},
                            {name: '新疆',value: Math.round(Math.random()*1000)},
                            {name: '浙江',value: Math.round(Math.random()*1000)},
                            {name: '江西',value: Math.round(Math.random()*1000)},
                            {name: '山西',value: Math.round(Math.random()*1000)},
                            {name: '内蒙古',value: Math.round(Math.random()*1000)},
                            {name: '吉林',value: Math.round(Math.random()*1000)},
                            {name: '福建',value: Math.round(Math.random()*1000)},
                            {name: '广东',value: Math.round(Math.random()*1000)},
                            {name: '西藏',value: Math.round(Math.random()*1000)},
                            {name: '四川',value: Math.round(Math.random()*1000)},
                            {name: '宁夏',value: Math.round(Math.random()*1000)},
                            {name: '香港',value: Math.round(Math.random()*1000)},
                            {name: '澳门',value: Math.round(Math.random()*1000)}
                        ]
                    },
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

            //负荷曲线
            var fuhechart = echarts.init(document.getElementById('fuhe'));
            var options = {
                title: {
                    text: '负荷曲线',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['今日']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // data: (function (){
                    //     var now = new Date();
                    //     var res = [];
                    //     var len = 5;
                    //     while (len--) {
                    //         res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                    //         now = new Date(now-3600000);
                    //     }
                    //     return res;
                    // })()
                    data:[10,12,14,16,18]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'今日',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },

                ]
            };
            fuhechart.setOption(options);

            //年度总电量
            var nianduechart = echarts.init(document.getElementById('niandudianliang'))
            var optionss = {
                title: {
                    text: '年度总电量'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    left:100,
                    data:['去年','今年'],
                    orient:'vertical'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['一月','二月','三月','四月','五月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'今年',
                        type:'line',
                        stack: '总量',
                        data:[120000, 132000, 101000, 134000, 900000, 2300000, 2100000]
                    },
                    {
                        name:'去年',
                        type:'bar',
                        stack: '总量',
                        data:[2200000, 1820000, 1910000, 2340000, 2900000, 3300000, 3100000],
                        barWidth : 5
                    },
                ]
            };
            nianduechart.setOption(optionss)
        }

    }
</script>

<style lang="less">
    @hemax:100%;
    .daping{
        height: 100%;
        background: #b3c2ff;
        .rongqi{
            height: @hemax;
            padding: 20px;
            display: flex;
            /*background: #000;*/
                .elleft{
                    height: @hemax;
                    /*background: #000;*/
                    display: flex;
                    flex-direction: column;
                    div{
                        background: rgba(148, 178, 200, 0.2);
                        border-radius: 5px;
                        height: 150px;
                        margin-top: 20px;

                    }
                }
                .elmid{
                    height: @hemax;
                    flex: 1;
                    /*background: #f67;*/
                    #cmaps{
                        height: 100%;
                    }
                }
                .elright{
                    height: @hemax;
                    /*background: #f50;*/
                    display: flex;
                    flex-direction: column;
                    div{
                        background: rgba(148, 178, 200, 0.2);
                        border-radius: 5px;
                        height: 150px;
                        margin-top: 20px;
                    }
                }


        }
    }
</style>
