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
                        <h3 class="title">账号登录</h3>
                        <el-radio class="identity" v-model="radio" label="1">我是医生</el-radio>
                        <el-radio class="identity" v-model="radio" label="2">我是患者</el-radio>
                        <!--账号密码-->
                        <el-input class="input-box" v-model="loginForm.username" prop="username"  placeholder="请输入账号"></el-input>
                        <el-input class="pwd-box"   v-model="loginForm.password" prop="password" placeholder="请输入密码" type="password" ></el-input>
                        <el-button type="primary" round>登录</el-button>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录框的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 登录的验证规则
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }

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
    line-height: 100px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .login_box{
      width: 350px;
      height: 400px;
      background: #ffffff;
      border: 1px solid #777777;
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
      margin-bottom: -50px
  }

  .input-box{
    padding: 0px;
    padding-right:60px;
    position: absolute;
    top: 130px;
    left:30px;
    box-sizing: border-box;
  }

  .pwd-box{
    padding: 0px;
    padding-right:60px;
    position: relative;
    top: 30px;
    left:30px;
    box-sizing: border-box;
  }

</style>
