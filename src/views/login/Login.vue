<template>
    <div class="login">
        <div class="login-form">
            <h1 class="title"><i class="el-icon-menu"></i>开能智慧能源后台管理系统</h1>
            <el-form :model="loginform" status-icon :rules="loginrules" ref="loginform" label-width="100px" class="demo-ruleForm">
                <el-form-item label="账号" prop="username">
                    <el-input type="text" v-model="loginform.username"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="pwd">
                    <el-input type="text" v-model="loginform.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginform')">登录</el-button>
                    <el-button @click="resetForm('loginform')">重置</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            // 验证密码的函数
            let pass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else if (value.length < 3 || value.length > 6) {
                    callback(new Error("密码长度 3 - 6 位"));
                } else{
                    if (this.loginform.checkpwd !== "") {
                        this.$refs.loginform.validateField("checkpwd");
                    }
                    callback();
                }
            };

            // // 确认密码的验证函数
            // let checkPass = (rule, value, callback) => {
            //     if (value === "") {
            //         callback(new Error("请再次输入密码"));
            //     } else if (value !== this.loginform.pwd) {
            //         callback(new Error("两次输入密码不一致"));
            //     }
            //
            //     callback();
            // };
            return {
                loginform: {
                    username: '',
                    pwd: '',
                    // checkpwd: ''
                },
                loginrules: {
                    username: [
                        { required: true, message: "请输入账号", trigger: "blur" },
                        { min: 2, max: 6, message: "账号长度在 2 - 6 位", trigger: "blur" }
                    ],
                    pwd: [
                        { required: true, validator: pass, trigger: "blur" }
                    ],
                    // checkpwd: [
                    //     { required: true, validator: checkPass, trigger: "blur" }
                    // ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let parmes = {
                            username:this.loginform.username,
                            password:this.loginform.pwd
                        };
                        this.req.post('/login',parmes)
                            .then(response=>{
                                let{success,message,errorCode,username}=response;
                                // console.log(errorCode);
                                if (errorCode === 0 ){
                                    window.localStorage.setItem('username',username);
                                    this.$message({
                                        type:"successs",
                                        message:message
                                    });
                                    this.$router.push('/')
                                }else {
                                    this.$message.error(message);
                                }

                            })
                            .catch(err=>{
                                console.log(err);
                            })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
    }
</script>

<style  lang="less">
    .login{
        background-color: #2d3a4b;
        height: 100%;
        .login-form{
            width: 600px;
            height: 400px;
            background-color: rgba(0,0,0,0.4);
            position:fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            border-radius:8px;
            color: #fff;
            padding-right: 50px;
            .title{
                text-align: center;
            }
            .el-form {
                .el-form-item {
                    .el-form-item__label {
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>