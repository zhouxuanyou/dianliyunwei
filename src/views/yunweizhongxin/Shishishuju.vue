<template>
    <div class="shishishuju">
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">
                <el-input
                        placeholder="输入关键字进行过滤"
                        v-model="filterText"
                >
                </el-input>

                <el-tree
                        class="filter-tree"
                        :data="data"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        ref="tree2">
                </el-tree>
            </div></el-col>
            <el-col :span="20"><div class="grid-content bg-purple-light">
                <!--实时曲线-->
                <div id="container" style="height: 50%"></div>
            </div></el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import req from '../../api/request'
    export default {
        name: "Shishishuju",
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },
        created(){
            this.gettaizhanglist();
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            //获取站点信息

            gettaizhanglist(){
                let cabinetId =2;
                this.req.get('/equipment/list',{cabinetId})
                    .then(res=>{
                        // console.log(res);
                        this.data = res;

                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },
        },
        mounted(){
            this.gettaizhanglist();
            var dom = document.getElementById("container");
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            option = {
                title: {
                    text: '折线图堆叠'
                },
                //提示框信息
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['A相电流','B相电流','C相电流']
                },
                //绘图网格
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},//切换图像
                        restore: {},
                        saveAsImage: {}
                    }
                },
                //x坐标轴配置
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: (function (){
                        var now = new Date();
                        var res = [];
                        var len = 10;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                            now = new Date(now - 3000);
                        }
                        return res;
                    })()
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'A相电流',
                        type:'line',
                        stack: '总量',
                        data:(function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                len++;
                            }
                            return res;
                        })(),
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 10
                            }]
                        }
                    },
                    {
                        name:'B相电流',
                        type:'line',
                        stack: '总量',
                        data:(function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                len++;
                            }
                            return res;
                        })(),
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 20
                            }]
                        }

                    },
                    {
                        name:'C相电流',
                        type:'line',
                        stack: '总量',
                        data:(function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                len++;
                            }
                            return res;
                        })(),
                        markLine: {
                            silent: true,
                            data: [{
                                yAxis: 25
                            }]
                        }
                    },
                ]
            };

            app.count = 11;
            let deviceId =2;
            setInterval(function (){
               let axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

                var data1 = option.series[0].data;
                data1.shift();
                data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

                option.xAxis.data.shift();
                option.xAxis.data.push(axisData);
               //  req.get('/realTimeData/getValue',{deviceId})
               //      .then(res=>{
               //          console.log(res);
               //      })
               //      .catch(err=>{
               //          console.log(err);
               //      })

                myChart.setOption(option);
            }, 2100);

        },

        data() {
            return {
                filterText: '',
                data: [],
                defaultProps: {
                    children: 'children',
                    label: 'equipmentname'
                }
            };
        },


    }
</script>

<style scoped lang="less">
    .shishishuju{
        height: 100%;
        .el-row{
            height: 100%;
            .el-col{
                height: 100%;
                .bg-purple{
                    height: 100%;
                    .el-input{
                        background: #ccc;
                    }
                    .filter-tree{
                        height: 100%;
                        background: #ccc;
                    }
                }
                .bg-purple-light{
                    height: 100%;
                    background: #fff;
                }
            }
        }

    }
</style>