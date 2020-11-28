<template>
    <div class="login_container">
        <el-container>
          <el-header>
            <div class="logo">
              <img src="..\assets\img\logo.png"/>
              <p>欢迎注册</p>
              <span class="golog">已有账号？<el-link type="danger">请登录</el-link></span>
            </div>
          </el-header>
          <span class="line"></span>
          <el-main>
            <div class="inpBox">
              <input type="text" placeholder="请输入手机号"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="设置密码"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="确认密码"/>
            </div>
            <div class="inpBox">
              <input type="text" placeholder="短信验证码" class="short"/>
              <a>获取验证码</a>
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
      radio: '1'
    }
  }
}

</script>

<style scoped>
  .login_container
  {
      background:#fff;
  }

 .el-header {
    background-color: #fff;
    color: #333;
    line-height: 40px;
    height: 150px;
  }

  .logo{
    height: 500px;
  }

  .logo img{
    height:30px;
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
    padding-right: 500px;
    top: 50px;
  }

  .line{
    height: 3px;
    background-color:rgba(209, 207, 207, 0.979);
    box-shadow:0px 1px 1px 2px rgba(209, 207, 207, 0.979);
  }
  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 30px;
  }

</style>
