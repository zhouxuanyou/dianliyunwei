<template>
    <div class="lishishuju">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>历史数据</span>
            </div>
            <template>
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
                tableData: []
            }
        },
        methods:{
            getlishishujul(){
                this.req.get('/')
                    .then(res=>{
                        this.tableData = res
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        created(){
            this.getlishishujul()
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