<template>
  <div class="login">
    <div id="leftContent">
      <button id="backHome" @click="backHome">回到主页</button>
      <input id="username" type="text" name="username" placeholder="请输入用户名">
      <input id="password" type="text" name="password" placeholder="请输入密码">
      <div id="signup">注册</div>
      <div id="login" @click="login">登录</div>
    </div>
    <div id="rightContent">
      <img id="backgroundImg" src="../../static/loginBackground.png">
      <div id="name">WeTrace</div>
      <div id="slogan"><span class="square"></span>全球领先的区块链商品溯源平台</div>
      <div class="division"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    login() {
      this.$router.push({ path: `${this.$route.query.operation}` });
    },
    backHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
}

#leftContent {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-block;
  width: 38.2%;
  height: 100%;
}

#backHome {
  position: absolute;
  left: 20px;
  top: 20px;
  display: inline-block;
  border-image: linear-gradient(45deg, #D70C18, #194EA0) 10 10;
  outline: none;
  width: 80px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

#backHome:hover {
  transform: scale(1.05, 1.05);
}

#username {
  display: inline-block;
  position: relative;
  top: 30%;
  margin: 0 auto;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #194EA0;
  width: 400px;
  height: 30px;
  font-size: 18px;
  outline: none;
}

#password {
  display: inline-block;
  position: relative;
  top: 32%;
  left: 40px;
  margin: 0 auto;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #194EA0;
  width: 400px;
  height: 30px;
  font-size: 18px;
  outline: none;
}

#username:hover,
#password:hover {
  border-bottom: 1px solid #3399FF;
}

#signup {
  display: inline-block;
  position: relative;
  left: -50px;
  top: 40%;
  font-size: 18px;
  color: #194EA0;
  cursor: pointer;
}

#login {
  display: inline-block;
  position: relative;
  left: -40px;
  top: 40%;
  font-size: 18px;
  color: #194EA0;
  cursor: pointer;
}

#signup:hover,
#login:hover {
  color: #3399ff;
}

#rightContent {
  position: absolute;
  left: 38.2%;
  top: 0;
  display: inline-block;
  width: 61.8%;
  height: 100%;
  /*background-image: url('../../static/loginBackground.png');*/
  /*background-size: 61.8% 100%;*/
}

#backgroundImg {
  width: 100%;
  height: 100%;
}

#name {
  position: relative;
  right: -20%;
  bottom: 40%;
  color: #fff;
  font-size: 140px;
  font-weight: bold;
  font-family: fantasy;
}

#slogan {
  position: relative;
  right: -22%;
  bottom: 43%;
  font-size: 32px;
  color: #194EA0;
  /*background-color: yellow;*/
}

.square {
  display: inline-block;
  position: relative;
  left: -12px;
  top: 15px;
  width: 40px;
  height: 55px;
  background-color: #194EA0;
}

.division {
  display: inline-block;
}
</style>
