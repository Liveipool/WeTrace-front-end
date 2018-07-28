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
        <input class="content" type="text" name="businessType" :value="businessType">
      </div>
      <div class="item">
        <span class="title">本站Id</span>
        <input
          class="content" type="text" name="currentNodeId"
          :value="currentNodeId" autofocus="autofocus">
      </div>
      <div class="item">
        <span class="title">本站名称</span>
        <input class="content" type="text" name="currentNodeName" :value="currentNodeName">
      </div>
      <div class="item">
        <span class="title">本站地址</span>
        <input class="content" type="text" name="currentNodeLocation" :value="currentNodeLocation">
      </div>
      <div class="item">
        <span class="title">物品Id</span>
        <input class="content" type="text" name="itemId" :value="itemId">
      </div>
      <div class="item">
        <span class="title">产地</span>
        <input class="content" type="text" name="origin" :value="origin">
      </div>
      <div class="item">
        <span class="title">质检Id</span>
        <input class="content" type="text" name="qualityId" :value="qualityId">
      </div>
      <div class="item">
        <span class="title">证书Id</span>
        <input class="content" type="text" name="authenticationId" :value="authenticationId">
      </div>
      <div class="item">
        <span class="title">下站Id</span>
        <input class="content" type="text" name="nextNodeId" :value="nextNodeId">
      </div>
      <div class="item">
        <span class="title">下站名称</span>
        <input class="content" type="text" name="nextNodeName" :value="nextNodeName">
      </div>
      <div class="item">
        <span class="title">下站地址</span>
        <input class="content" type="text" name="nextNodeLocation" :value="nextNodeLocation">
      </div>
      <div class="item">
        <span class="title">经手人</span>
        <input class="content" type="text" name="handler" :value="handler">
      </div>
      <div class="item">
        <span class="title">经办时间</span>
        <input class="content" type="text" name="handleTime" :value="handleTime">
      </div>
    </div>

    <img
      class="onChainSubmit" @click="onChainSubmit"
      id="onChainSubmit" src="../../static/onChainSubmit.png">
  </div>
</template>

<script>
import blocks from '@/utils/fakeData';

export default {
  name: 'Login',
  data() {
    return {
      blocks,
      businessType: '',
      itemId: '',
      origin: '',
      qualityId: '',
      authenticationId: '',
      transactionId: '',
      currentNodeId: '',
      currentNodeName: '',
      currentNodeLocation: '',
      handler: '',
      handleTime: '',
      nextNodeId: '',
      nextNodeName: '',
      nextNodeLocation: '',
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
  mounted() {
    if (this.blocks.length !== 0) {
      const itemObj = this.blocks[0];
      this.businessType = itemObj.businessType;
      this.currentNodeId = itemObj.currentNodeId;
      this.currentNodeName = itemObj.currentNodeName;
      this.currentNodeLocation = itemObj.currentNodeLocation;
      this.itemId = itemObj.itemId;
      this.origin = itemObj.origin;
      this.qualityId = itemObj.qualityId;
      this.authenticationId = itemObj.authenticationId;
      // this.transactionId = itemObj.transactionId;
      // this.handler = itemObj.handler;
      const date = new Date();
      this.handleTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      this.nextNodeId = itemObj.nextNodeId;
      this.nextNodeName = itemObj.nextNodeName;
      this.nextNodeLocation = itemObj.nextNodeLocation;
    }
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

