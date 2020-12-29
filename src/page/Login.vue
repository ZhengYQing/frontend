<template>
    <div class="login_container">
        <el-container>
            <el-container>
                <el-aside width="900px">
                    <div>
                        <img class ="backImg" src="..\assets\img\bigImg.png">
                    </div>
                </el-aside>
                <el-main>
                    <div :model="loginForm"  class="login_box" :rules="loginFormRules">
                        <!--选择身份-->
                        <h2 class="title">账号登录</h2>
                        <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item style="margin-left:-80px" prop="resource">
                          <el-radio-group v-model="ruleForm.identity">
                            <el-radio label="我是患者"></el-radio>
                            <el-radio label="我是医生"></el-radio>
                          </el-radio-group>
                        </el-form-item>
                          <el-form-item label="账号：" prop="account">
                            <el-input  v-model="ruleForm.account" autocomplete="off" clearable >
                            </el-input>
                          </el-form-item>
                          <el-form-item label="密码：" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password clearable></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                          </el-form-item>
                        </el-form>
                        <div><el-link type="danger"  @click="goReg">没有账号，去注册</el-link></div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { isValidPhone } from '../config/validate'

export default {
  data () {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账号不能为空'))
      } else {
        if (isValidPhone(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        identity: '',
        account: '',
        password: ''
      },
      rules: {
        identity: [{
          required: true,
          message: '请选择身份',
          trigger: 'change'
        }],
        account: [{
          validator: validateAccount,
          trigger: 'blur'
        }],
        password: [{
          validator: validatePassword,
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.account !== 'admin' || this.ruleForm.password !== '123456') {
          // 只是为了做登录效果，所以账号密码写的固定的。
            this.$message.error('账号密码不正确')
            return false
          } else { // 真正项目中登录成功之后，就可以用路由跳转页面
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
          }
        } else {
          this.$message.error('登录失败')
          return false
        }
      })
    },
    goReg () {
      this.$router.push({ path: '/register' })
    }
  }
}

</script>
<style scoped>
  .el-aside {
    background-color: #bfe5fa;
    color: #333;
    text-align: center;
    line-height: 100px;
    width:400px;
  }

  .el-main {
    background-color:#bfe5fa;
    color: #333;
    width:600px;
    text-align: center;
    line-height: 20px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .login_box{
    width: 350px;
    height: 400px;
    background: #ffffff;
    border: 1px solid #eeebeb;
    border-radius: 20px;
    left: 50%;
    top: 0;
    transform: translate(45%,50%);
  }

  .login_container
  {
    background:#bfe5fa
  }

  .backImg{
    padding-top: 50px;
    padding-left: 50px;
    width: 750px;
    height: 650px;
  }

  .title{
    padding-top: 40px;
    padding-bottom: 20px;
  }

  .el-input {
    height: 50px;
    width: 200px;
    border: none;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    padding-right: 230px;
  }

  .el-button{
    margin-left:-85px;
  }

  .el-link{
    padding-left: 10px;
  }

</style>
