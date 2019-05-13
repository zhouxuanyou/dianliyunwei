<template>
    <div class="shebeitaizhang">
        <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple">
                <!--站点-->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>站点</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="centerDialogVisible = true">新增</el-button>
                    </div>
                    <el-tree :data="data"
                             :props="defaultProps"
                             @node-click="handleNodeClick"
                             node-key="id"
                             ref="tree"
                             :highlight-current = "true"
                    ></el-tree>
                </el-card>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <!--机柜-->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>机柜</span>
                        <el-button style="float: right; padding: 3px 0" type="text">新增</el-button>
                    </div>
                    <el-tree :data="jiguidata" :props="defaultprop" @node-click="handleNodeClicks"></el-tree>
                </el-card>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <!--设备-->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>设备</span>
                        <el-button style="float: right; padding: 3px 0" type="text">新增</el-button>
                    </div>
                    <el-tree :data="shebei" :props="defaultprops" ></el-tree>
                </el-card>
            </div></el-col>
        </el-row>

        <!--站点增加模态框-->
        <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="站房">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="站点区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域" value="">
                        <!--<el-option label="区域一" value="shanghai"></el-option>-->
                        <el-option v-for="(res,index) in data" :label="res.stationName" :value="res.stationName" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button @click="centerDialogVisible = false">取消</el-button>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <!--<el-button @click="centerDialogVisible = false">取 消</el-button>-->
    <!--<el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
  </span>
        </el-dialog>


    </div>
</template>

<script>
    export default {
        name: "Shebeitaizhang",
        data() {
            return {
                centerDialogVisible: false,
                data: [
                    ],
                jiguidata:[],
                shebei:[],
                defaultprop:{
                    children: 'children',
                    label: 'cabinetname'

                },
                defaultProps: {
                    children: 'children',
                    label: 'stationName'
                },
                defaultprops:{
                    children: 'children',
                    label: 'equipmentname'
                },
                form: {
                    name: '',
                    region: '',
                }
            };

        },
        created(){
            this.gettaizhanglist();

        },
        methods: {
            //获取机柜信息
            handleNodeClick(data) {
                // console.log(data.id);
                let stationid = data.id;
                this.req.get('/cabinet/list',{stationid})
                    .then(res=>{
                        console.log(res);
                        this.jiguidata = res;
                    })
            },
            //获取设备信息
            handleNodeClicks(data) {
                // console.log(data.id);
                let cabinetId = data.id;
                this.req.get('equipment/list',{cabinetId})
                    .then(res=>{
                        console.log(res);
                        this.shebei = res;
                    })
            },
            getCheckedNodes() {
                console.log(this.$refs.tree.getCheckedNodes());
            },
            //获取站点信息
            gettaizhanglist(){
                this.req.get('/stationBuilding/list')
                    .then(res=>{
                        this.data = res;

                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },
            onSubmit() {
                console.log(this.form);
            }
        }




    }
</script>

<style scoped lang="less">
    .shebeitaizhang{
        padding: 20px;
        height: 100%;
        .el-row{
            height: 100%;
            .el-col{
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
    }
</style>