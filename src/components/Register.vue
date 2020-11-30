<template>
    <div class="login_container">
      <el-container>
          <el-header height="100px">
            <div class="logo">
              <img src="..\assets\img\logo.png"/>
              <p>欢迎注册</p>
              <span class="golog">已有账号？<el-link type="danger" >请登录</el-link></span>
            </div>
          </el-header>
          <el-main >
            <p>账号注册</p>
            <div class="inpBox">
              <input class="regBox" type="text" placeholder="请输入手机号" v-model="phone"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="短信验证码" class="short" v-model="code"/>
              <el-button type="info" round @click="sendCode">获取验证码</el-button>
            </div>
            <div class="inpBox">
              <input type="password" placeholder="设置密码" v-model="password"/>
            </div>
            <div class="inpBox">
              <input type="password" placeholder="确认密码" v-model="pwdcheck"/>
            </div>
            <el-button type="primary" round>立即注册</el-button>
          </el-main>
      </el-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
    // 登录数据绑定对象
      name: '',
      phone: '',
      code: '',
      password: '',
      pwdcheck: ''
    }
  },
  methods: {
    // => 发送验证码
    async sendCode () {
      // =>放置不必要的服务器请求 + 注入式攻击
      if (!/^1\d{10}$/.test(this.phone)) {
        window.alert('请保证手机号码正确！')
        return
        // return
      }
      // => 验证手机号是否被注册
      let data = await this.$api.personal.phone(this.phone)
      if (parseInt(data.code) === 0) { // 已经被注册
        window.alert('当前账号已经被注册！')
        return
      }
      // => 通知服务器发送验证码
      data = await this.$api.personal.phone(this.code)
      if (parseInt(data.code) === 1) {
        window.alert('当前网络繁忙，请稍候再试！')
      }
    }
  }
}

</script>

<style scoped>
  .el-container{
    background-color:rgb(167, 224, 247);
    background-image:url(../assets/img/rebg.png);
  }

  .login_container
  {
      background:#fff;
  }

 .el-header {
    background-color: #fff;
    color: #333;
    line-height: 40px;
  }

  .logo{
    height: 100px;
  }

  .logo img{
    display: inline-block;
    height: 72px;
    width: 90px;
    position: absolute;
    top:20px;
    left: 175px;
  }

  .logo p{
    font-size: 28px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    top:10px;
    left: 300px;
  }

  .golog{
    float: right;
    padding-right: 250px;
    padding-top: 30px;
  }

  .el-link{
    vertical-align: top;
  }

  .line{
    height: 3px;
    background-color:rgba(209, 207, 207, 0.979);
    box-shadow:0px 1px 1px 2px rgba(209, 207, 207, 0.979);
  }
  .el-main {
    background-color:#fff;
    color: #333;
    text-align: center;
    line-height: 50px;
    margin: 20px auto;
    border-radius: 5px;
  }

  .el-main p{
    font-size: 30px;
  }
  .inpBox{
    padding:15px 0;
    height: 70px;
    width: 400px;
  }

  .inpBox input{
    height: 50px;
    width: 300px;
    background-color: #f2f2f2;
    border: none;
    margin-bottom: 30px;
    font-size: 14px;
    text-indent: 10px;
    outline: none;
    border-radius: 5px;
    }

    .inpBox .short{
      width: 150px;
    }

    .el-button{
      margin-left: 33px;
    }
</style>
