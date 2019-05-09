<template>
    <div class="daping">
        <!--<el-button type="primary" icon="el-icon-edit" @click="getaccountelist"></el-button>-->
        <el-row class="rongqi" :gutter="20">
            <el-col :span="4" style="height: 100%;">
                <div class="grid-content bg-purple elleft">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div class="box4"></div>
                </div>
            </el-col>
            <el-col :span="16" style="height: 100%"><div class="grid-content bg-purple-light elmid">
                <div id="cmaps" ></div>
            </div></el-col>
            <el-col :span="4" style="height: 100%"><div class="grid-content bg-purple elright">右</div></el-col>
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
                    subtext: '纯属虚构',
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

                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text:['高','低'],           // 文本，默认为数值文本
                    calculable : true
                },
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
                    // {
                    //     name: 'iphone5',
                    //     type: 'map',
                    //     mapType: 'china',
                    //     label: {
                    //         normal: {
                    //             show: false
                    //         },
                    //         emphasis: {
                    //             show: true
                    //         }
                    //     },
                    //     data:[
                    //         {name: '北京',value: Math.round(Math.random()*1000)},
                    //         {name: '天津',value: Math.round(Math.random()*1000)},
                    //         {name: '上海',value: Math.round(Math.random()*1000)},
                    //         {name: '广东',value: Math.round(Math.random()*1000)},
                    //         {name: '台湾',value: Math.round(Math.random()*1000)},
                    //         {name: '香港',value: Math.round(Math.random()*1000)},
                    //         {name: '澳门',value: Math.round(Math.random()*1000)}
                    //     ]
                    // }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }

    }
</script>

<style lang="less">
    @hemax:100%;
    .daping{
        height: 100%;
        background: #606dff;
        .rongqi{
            height: @hemax;
            padding: 20px;
            display: flex;
            /*background: #000;*/
                .elleft{
                    height: @hemax;
                    background: #000;
                    display: flex;
                    flex-direction: column;
                    div{
                        background: #3b6f8c;
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
                    background: #f50;
                }


        }
    }
</style>
