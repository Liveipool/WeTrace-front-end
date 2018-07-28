<template>
  <div class="login">
    <img id="loginOnChainBackgound" src="../../static/loginOnChainBackground.jpg">
    <img
      class="home" @click="backHome" src="../../static/homeButton.png">
    <img
      class="history" @click="searchHistory" id="history" src="../../static/history.png">

    <div id="table">
      <div class="item">
        <span class="title">商家类型</span>
        <input class="content" type="text" name="businessType" autofocus="">
      </div>
      <div class="item">
        <span class="title">物品Id</span>
        <input class="content" type="text" name="itemId">
      </div>
      <div class="item">
        <span class="title">条形码</span>
        <input class="content" type="text" name="barcode">
      </div>
      <div class="item">
        <span class="title">产地</span>
        <input class="content" type="text" name="origin">
      </div>
      <div class="item">
        <span class="title">质检Id</span>
        <input class="content" type="text" name="qualityId">
      </div>
      <div class="item">
        <span class="title">证书Id</span>
        <input class="content" type="text" name="authenticationId">
      </div>
      <div class="item">
        <span class="title">物流单号</span>
        <input class="content" type="text" name="logistics">
      </div>
      <div class="item">
        <span class="title">本站Id</span>
        <input class="content" type="text" name="currentNodeId">
      </div>
      <div class="item">
        <span class="title">本站名称</span>
        <input class="content" type="text" name="currentNodeName">
      </div>
      <div class="item">
        <span class="title">本站地址</span>
        <input class="content" type="text" name="currentNodeLocation">
      </div>
      <div class="item">
        <span class="title">经手人</span>
        <input class="content" type="text" name="handler">
      </div>
      <div class="item">
        <span class="title">经办时间</span>
        <input class="content" type="text" name="handleTime">
      </div>
      <div class="item">
        <span class="title">下站Id</span>
        <input class="content" type="text" name="nextNodeId">
      </div>
      <div class="item">
        <span class="title">下站名称</span>
        <input class="content" type="text" name="nextNodeName">
      </div>
      <div class="item">
        <span class="title">下站地址</span>
        <input class="content" type="text" name="nextNodeLocation">
      </div>
    </div>

    <img
      class="onChainSubmit" @click="onChainSubmit"
      id="onChainSubmit" src="../../static/onChainSubmit.png">
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
    // 点击上链历史按钮
    searchHistory() {
      if (window.login) {
        this.$router.push({ path: '/history' });
      } else {
        this.$router.push({ path: '/login', query: { operation: 'history' } });
      }
    },
    backHome() {
      this.$router.push({ path: '/' });
    },
    // 提交表单进行上链
    onChainSubmit() {
      this.$message({
        message: '上链成功',
        type: 'success',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100%;
}

#loginOnChainBackgound {
  width: 100%;
  height: 100%;
}

.home {
  position: absolute;
  left: 73%;
  top: 8%;
  width: 6%;
  height: 6%;
  cursor: pointer;
  opacity: 0.8;
}

.history {
  position: absolute;
  left: 80%;
  top: 8%;
  width: 8%;
  height: 6%;
  cursor: pointer;
}

#table {
  position: absolute;
  left: 0;
  top: 20%;
  padding: 1% 0 0 5%;
  width: 100%;
  height: 70%;
  text-align: left;
}

.item {
  display: inline-block;
  margin: 15px 5% 15px 5%;
  width: 33%;
  height: 5%;
  font-size: 22px;
}

.title {
  position: relative;
  top: 10%;
  display: inline-block;
  width: 25%;
  color: #58f9f1;
}

.content {
  width: 70%;
  height: 50%;
  padding-left: 10px;
  padding-bottom: 10px;
  border: 0;
  border-bottom: 1px solid #58f9f1;
  background-color: transparent;
  font-size: 20px;
  color: #fff;
  outline: none;
}

#content:hover {
  border-bottom: 1px solid #3399ff;
}

.onChainSubmit {
  position: absolute;
  left: 35%;
  top: 85%;
  width: 30%;
  height: 7%;
  cursor: pointer;
}
</style>

<style>
/*上传成功提示框*/
.el-message {
  border: 1px solid rgba(41, 171, 226, 0.4);
  background-color: rgba(41, 171, 226, 0.4);
}

.el-message > .el-message__icon,
.el-message > .el-message__content {
  color: #fff;
}
</style>

