<template>
    <div class="lishishuju">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>历史数据</span>

            </div>
            <template>
                <div class="block">
                    <span class="demonstration"></span>
                    <el-date-picker
                            v-model="checktime"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            @change="checktimes"
                    >
                    </el-date-picker>
                </div>
                <el-table
                        :data="tableData"
                        height="250"
                        border
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="时间"
                            width="auto">
                    </el-table-column>
                    <el-table-column
                            prop="Ia"
                            label="Ia"
                            width="auto">
                    </el-table-column>
                    <el-table-column
                            prop="Ib"
                            label="Ib"
                            width="auto"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="Ic"
                            label="Ic"
                            width="auto"
                    >
                    </el-table-column>
                </el-table>
            </template>

        </el-card>
    </div>
</template>

<script>

    export default {
        name: "Lishishuju",
        data() {
            return {
                tableData: [],
                checktime: [],
            }
        },
        methods:{
            // getlishishujul(){
            //     this.req.get('/')
            //         .then(res=>{
            //             this.tableData = res
            //         })
            //         .catch(err=>{
            //             console.log(err)
            //         })
            // },
            checktimes(val){
                if (val === undefined)
                    val = [this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss")]
                this.checktime = val;
                let params = {
                    deviceId : 1,
                    starttime:this.checktime[0],
                    endtime : this.checktime[1]
                };
                console.log(params);
                this.req.get('/gethistorydata',params)
                    .then(res=>{
                        this.tableData = res
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        created(){
            this.checktimes()
        }

    }
</script>

<style scoped lang="less">
    .lishishuju{
        height: 100%;
        .box-card{
            height: 100%;
            .clearfix:before,
            .clearfix:after {
                display: table;
                content: "";
            }
            .clearfix:after {
                clear: both
            }
        }
    }
</style>