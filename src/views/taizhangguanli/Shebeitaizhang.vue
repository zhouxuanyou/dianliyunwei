<template>
    <div class="shebeitaizhang">
        <el-row>
            <el-col :span="4"><div class="grid-content bg-purple">
                <el-tree
                        :data="data"
                        :props="defaultProps"
                        accordion
                        @node-click="handleNodeClick">
                </el-tree>
            </div></el-col>
            <el-col :span="20"><div class="grid-content bg-purple-light">

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>卡片名称</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <el-table
                            :data="tableData"
                            style="width: 100%">
                        <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </div></el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Shebeitaizhang",
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                tableData: [{
                    date: '2019-05-10',
                    name: '开能智慧能源有限公司',
                    address: '成都市武侯区人民南路44号首座C栋18'
                }, {
                    date: '2019-05-10',
                    name: '开能智慧能源有限公司',
                    address: '成都市武侯区人民南路44号首座C栋18'
                }, {
                    date: '2019-05-10',
                    name: '开能智慧能源有限公司',
                    address: '成都市武侯区人民南路44号首座C栋18'
                }, {
                    date: '2019-05-10',
                    name: '开能智慧能源有限公司',
                    address: '成都市武侯区人民南路44号首座C栋18'
                }]
            }

        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }




    }
</script>

<style scoped lang="less">
    .shebeitaizhang{
        height: 100%;
        .el-row{
            height: 100%;
            .el-col{
                height: 100%;
                .bg-purple{
                    height: 100%;
                    background: #000;
                    .el-tree{
                        height: 100%;
                    }
                }
                .bg-purple-light{
                    height: 100%;
                    .box-card{
                        height: 100%;
                    }
                }
            }
        }
    }
</style>