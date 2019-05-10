<template>
    <div class="yonghuguanli">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="float: left">用户表</span>
            </div>
            <el-table
                    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <el-table-column
                        label="创建时间"
                        prop="date">
                </el-table-column>
                <el-table-column
                        label="用户名"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="用户身份"
                        prop="identity">
                </el-table-column>
                <el-table-column
                        align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="输入关键字搜索"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary"
                                icon="el-icon-edit"
                                circle
                                @click="handleEdit(scope.$index, scope.row);flag=true"></el-button>

                        <el-button
                                size="mini"
                                icon="el-icon-search"
                                circle
                                @click="handleSee(scope.$index, scope.row); centerDialogVisible = true"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!--查看模态框-->
            <el-dialog
                    title="角色信息"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    center>
                <div class="item" :data="userinfo">
                    <p>用户名：<span>{{userinfo.name}}</span></p>
                    <p>创建时间：<span>{{userinfo.date}}</span></p>
                    <p>用户身份：<span>{{userinfo.identity}}</span></p>
                </div>

                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
            <!--修改模态框-->
            <el-dialog
                    title="角色信息"
                    :visible.sync="flag"
                    width="30%"
                    center>

                <span slot="footer" class="dialog-footer">
    <el-button @click="flag = false">取 消</el-button>
    <el-button type="primary" @click="flag = false">确 定</el-button>
  </span>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Danweiguanli",
        data() {
            return {
                userinfo: {
                    date: '2019-05-10',
                    name: '张三',
                    identity: '超级管理员'
                },
                search: '',
                centerDialogVisible: false,
                flag:false,
                tableData: [{
                    date: '2019-05-10',
                    name: '张三',
                    identity: '超级管理员'
                }, {
                    date: '2019-05-10',
                    name: '李四',
                    identity: '管理员'
                }, {
                    date: '2019-05-10',
                    name: '王五',
                    identity: '工程师'
                }, {
                    date: '2019-05-10',
                    name: '小周周',
                    identity: '普通用户'
                }],
            };

        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleSee(index, row) {
                console.log(index, row);
            }
        },
    }
</script>

<style scoped lang="less">
    .yonghuguanli{
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