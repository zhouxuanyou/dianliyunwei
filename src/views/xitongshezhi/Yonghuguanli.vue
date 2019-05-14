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
                        label="加入时间"
                        prop="joinTime">
                </el-table-column>
                <el-table-column
                        label="用户名"
                        prop="username">
                </el-table-column>
                <el-table-column
                        label="地址"
                        prop="address">
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
                    <p>用户名：<span>{{userinfo.username}}</span></p>
                    <p>创建时间：<span>{{userinfo.joinTime}}</span></p>
                    <p>用户身份：<span>{{userinfo.leader}}</span></p>
                    <p>联系电话：<span>{{userinfo.phoneNumber}}</span></p>
                </div>

                <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
            <!--修改模态框-->
            <el-dialog
                    title="角色管理"
                    :visible.sync="flag"
                    width="50%"
                    center>
                <el-transfer
                        v-model="value"
                        :data="jiaosedata"
                        :titles="['所有角色','当前角色']"

                >
                </el-transfer>

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
            // const generateData = _ => {
            //     const data = [];
            //     for (let i = 1; i <= 15; i++) {
            //         data.push({
            //             key: i,
            //             label: `备选项 ${ i }`,
            //             disabled: i % 4 === 0
            //         });
            //     }
            //     return data;
            // };
            return {
                userinfo: {

                },
                search: '',
                centerDialogVisible: false,
                flag:false,
                tableData: [],
                jiaosedata:[],
                value:[],
            };

        },
        methods: {
            handleEdit(index, row) {
                // console.log(index, row);
                this.req.get('role/list')
                    .then(res=>{
                        res.forEach(jiaose=>{
                            // console.log(jiaose.roleName);
                            this.jiaosedata.push({
                                lable:jiaose.roleName,
                                key:jiaose.id,
                            })
                        });
                        // console.log(this.jiaosedata)
                        // console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            },
            handleSee(index, row) {
                // console.log(index, row);
                this.userinfo = this.tableData[index];
                // console.log(this.userinfo);
            },
            //获取用户信息
            getuserlist(){
                this.req.get('powerunit/list')
                    .then(res=>{
                        // console.log(res);
                        this.tableData = res;
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        },
        created(){
            this.getuserlist();
        }
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