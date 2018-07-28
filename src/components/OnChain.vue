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
        <input class="content" type="text" name="businessType" v-model="businessType">
      </div>
      <div class="item">
        <span class="title">本站ID</span>
        <input
          class="content" type="text" name="currentNodeId"
          v-model="currentNodeId" autofocus="autofocus">
      </div>
      <div class="item">
        <span class="title">本站名称</span>
        <input class="content" type="text" name="currentNodeName" v-model="currentNodeName">
      </div>
      <div class="item">
        <span class="title">本站地址</span>
        <input class="content" type="text" name="currentNodeLocation" v-model="currentNodeLocation">
      </div>
      <div class="item">
        <span class="title">商品ID</span>
        <input class="content" type="text" name="itemId" v-model="itemId">
      </div>
      <div class="item">
        <span class="title">产地</span>
        <input class="content" type="text" name="origin" v-model="origin">
      </div>
      <div class="item">
        <span class="title">条形码</span>
        <input class="content" type="text" name="barcode" v-model="barcode">
      </div>
      <div class="item">
        <span class="title">质检ID</span>
        <input class="content" type="text" name="qualityId" v-model="qualityId">
      </div>
      <div class="item">
        <span class="title">证书ID</span>
        <input class="content" type="text" name="authenticationId" v-model="authenticationId">
      </div>
      <div class="item">
        <span class="title">下站ID</span>
        <input class="content" type="text" name="nextNodeId" v-model="nextNodeId">
      </div>
      <div class="item">
        <span class="title">下站名称</span>
        <input class="content" type="text" name="nextNodeName" v-model="nextNodeName">
      </div>
      <div class="item">
        <span class="title">下站地址</span>
        <input class="content" type="text" name="nextNodeLocation" v-model="nextNodeLocation">
      </div>
      <div class="item">
        <span class="title">经手人</span>
        <input class="content" type="text" name="handler" v-model="handler">
      </div>
<!--       <div class="item">
        <span class="title">经办时间</span>
        <input class="content" type="text" name="handleTime" v-model="handleTime">
      </div> -->
    </div>

    <img
      class="onChainSubmit" @click="onChainSubmit"
      id="onChainSubmit" src="../../static/onChainSubmit.png">

    <el-dialog
      title="上链成功"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false">
      <span slot="footer" class="dialog-footer">
        <el-button @click="goHistory">上链记录</el-button>
        <el-button type="primary" @click="goOnChain">继续上链</el-button>
      </span>
    </el-dialog>
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
      barcode: '',
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
      dialogVisible: false,
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
      // 真实接口
      // console.log('this.itemId: ', this.itemId, 'this.barcode: ',
      //   this.barcode, 'this.currentNodeId: ', this.currentNodeId,
      //   'this.handler: ', this.handler, 'this.nextNodeId: ', this.nextNodeId);
      // this.axios.post('http://172.20.10.2:8080/upload', {
      //   itemId: this.itemId,
      //   barcode: this.barcode,
      //   currentNodeId: this.currentNodeId,
      //   handler: this.handler,
      //   nextNodeId: this.nextNodeId,
      //   userId: window.userId,
      // }, { xhrFields: {withCredentials:true} }).then((response) => {
      //   console.log('upload response: ', response);
      //   this.$message({
      //     message: '上链成功',
      //     type: 'success',
      //   });
      // });
      // 不要接口
      // this.$message({
      //   message: '上链成功',
      //   type: 'success',
      // });
      this.dialogVisible = true;
    },
    goHistory() {
      this.dialogVisible = false;
      this.$router.push({ path: '/history' });
    },
    goOnChain() {
      this.dialogVisible = false;
      // TODOS：这里还要重新交互一下表单
    },
  },
  mounted() {
    if (this.blocks.length !== 0) {
      const itemObj = this.blocks[0];
      this.businessType = itemObj.businessType;
      this.currentNodeId = itemObj.currentNodeId;
      this.currentNodeName = itemObj.currentNodeName;
      this.currentNodeLocation = itemObj.currentNodeLocation;
      // this.itemId = itemObj.itemId;
      this.origin = itemObj.origin;
      this.barcode = itemObj.barcode;
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
  height: 6%;
  font-size: 22px;
}

.title {
  position: relative;
  top: 12%;
  display: inline-block;
  width: 25%;
  color: #58f9f1;
}

.content {
  width: 70%;
  height: 60%;
  padding-left: 10px;
  padding-bottom: 5px;
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

/*弹框部分*/
.login > .el-dialog__wrapper > .el-dialog {
  padding: 20px;
  background-color: transparent;
  background-color: rgba(41, 171, 226, 0.32);
  color: #fff;
  border: 2px solid #58f9f1;
  border-radius: 3%;
}

.login > .el-dialog__wrapper > .el-dialog > .el-dialog__header {
  margin-top: 20px;
  text-align: center;
}

.login > .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
  color: #fff;
  font-size: 32px;
  /*font-weight: bold;*/
}

.login > .el-dialog__wrapper > .el-dialog > .el-dialog__body {
  padding: 0;
}

.login > .el-dialog__wrapper > .el-dialog >.el-dialog__footer {
  text-align: center;
}

.login > .el-dialog__wrapper > .el-dialog >.el-dialog__footer > .dialog-footer > .el-button {
  background-color: transparent;
  display: inline-block;
  /*margin: 0 auto;*/
  margin: 10px;
  padding: 10px 0;
  border: 2px solid #58f9f1;
  width: 35%;
  height: 5%;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  text-align: center;
}

.login > .el-dialog__wrapper > .el-dialog >
.el-dialog__footer > .dialog-footer > .el-button:hover {
  background-color: rgba(41, 171, 226, 0.32);
}
</style>

