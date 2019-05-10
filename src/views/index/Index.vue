<template>
    <div class="index">
        <el-container>
            <el-header>
                <div class="top">
                    <el-row>
                        <el-col :span="12">
                            <div  class="title">
                                <i class="el-icon-menu"></i>
                                开能智慧能源运维平台
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="top-right">
                                <el-row>
                                    <el-col :span="18">
                                        欢迎您!
                                        <el-dropdown @command="handleconmand">
                            <span class="username el-dropdown-link" >
                                {{ username }}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item command="editpwd">修改密码</el-dropdown-item>
                                                <el-dropdown-item command="loginout">注销</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="avatar">
                                            <img width="100%" height="100%" :src="avatarUrl" alt="">
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-header>
            <el-container>
                <el-aside
                        :collapse="isCollapse"
                        style="width: auto"
                >
                    <div class="iscollapse" @click="setcollapse">
                        <i class="el-icon-arrow-right" v-if="!isCollapse" title="折叠"></i>
                        <i class="el-icon-arrow-left" v-else title="展开"></i>
                    </div>
                    <el-menu
                            :default-active="this.$route.path"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            :collapse="isCollapse"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b"
                            unique-opened
                            router
                    >
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">首页</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/">首页大屏</el-menu-item>
                                <el-menu-item index="/shujuzhongxin">数据中心</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-s-platform"></i>
                                <span slot="title">运维中心</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/realtimevalue">实时数据</el-menu-item>
                                <el-menu-item index="/alarminformation">告警信息</el-menu-item>
                                <el-menu-item index="/realtimevideo">视频监控</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                                <i class="el-icon-s-marketing"></i>
                                <span slot="title">数据分析</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/historyvalue">历史数据</el-menu-item>
                                <el-menu-item index="/datareport">数据报表</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-s-order"></i>
                                <span slot="title">台账管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/equipmentledger">设备台账</el-menu-item>
                                <el-menu-item index="/communication">通信管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="5">
                            <template slot="title">
                                <i class="el-icon-phone"></i>
                                <span slot="title">客服中心</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/notice">公告管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="6">
                            <template slot="title">
                                <i class="el-icon-s-cooperation"></i>
                                <span slot="title">系统组态</span>
                            </template>
                        </el-submenu>
                        <el-submenu index="7">
                            <template slot="title">
                                <i class="el-icon-s-tools"></i>
                                <span slot="title">系统设置</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/unitmanagement">用户管理</el-menu-item>
                                <el-menu-item index="/rolemanagement">角色管理</el-menu-item>
                                <el-menu-item index="/permissionmanagement">权限管理</el-menu-item>
                                <el-menu-item index="/datadictionary">数据字典</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                isCollapse: false,
                username: "请登录",
                avatarUrl: 'http://127.0.0.1:8080/avatar.jpg'
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            //设置导航栏折叠效果
            setcollapse(){
                return this.isCollapse = !this.isCollapse
            },
            handleconmand(command){
                if (command === 'loginout'){
                    window.localStorage.removeItem('username');
                    this.req.get('/logout')
                        .then(res=>{
                            // console.log(res);
                        })
                        .catch(err=>{
                            console.log(err)
                        });
                    this.$message({
                                type:"success",
                                message:"退出成功"
                            });
                    this.$router.push('/login')
                } else {
                    this.$message.error('退出失败');
                }
                // if (command === 'loginout'){
                //     this.$message({
                //         type:"success",
                //         message:"退出成功"
                //     });
                //     this.$router.push('/login')
                // }else {
                //     this.$message.error('退出失败');
                // }
            }

        },
        created(){
            if (window.localStorage.getItem('username'))
                this.username = window.localStorage.getItem('username');
        }
    }
</script>

<style lang="less">
    .index{
        height: 100%;
        .el-container{
            height: 100%;
            display: flex;
            .el-header {
                background-color: #616a73;
                color: #ffd04b;
                line-height: 60px;
                .top {
                    // background-color: red;
                    border-bottom: 2px solid green;
                    .title {
                        text-align: left;
                        font-size: 20px;
                        font-weight: 900;
                    }
                    .top-right {
                        color: #2d3a4b;
                        text-align: right;
                        .username {
                            font-weight: 600;
                            color: #ffd04b;
                        }
                        .avatar {
                            width: 52px;
                            height: 52px;
                            margin-top: 4px;
                            margin-left: 30px;
                            border-radius: 50%;
                            img {
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
            .el-aside {
                background: #545c64;
                text-align: center;
                .el-menu-vertical-demo:not(.el-menu--collapse) {
                    width: 200px;
                    border: none;
                    min-height: 100%;
                    text-align: left;
                }
                .iscollapse{
                    background: #545c64;
                }
                .el-menu--collapse{
                    border: none;
                }

            }
            .el-main {
                background-color: #E9EEF3;
                color: #333;
                text-align: center;
                /*line-height: 160px;*/
                flex: 1;
                height: 100%;
                padding: 0;
            }
        }
    }

</style>