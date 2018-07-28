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
        <input
          class="content" type="text" name="itemId"
          v-model="itemId" @blur="itemIdBlur">
      </div>
      <div class="item">
        <span class="title">商品名称</span>
        <input class="content" type="text" name="itemName" v-model="itemName">
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
        <input
          class="content" type="text" name="nextNodeId"
          v-model="nextNodeId" @blur="nextNodeIdBlur">
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
import constants from '@/utils/constants';

export default {
  name: 'Login',
  data() {
    return {
      blocks,
      businessType: '',
      itemId: '',
      itemName: '',
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
      this.axios.post(`${constants.ip}/upload`, {
        itemId: this.itemId,
        barcode: this.barcode,
        currentNodeId: this.currentNodeId,
        handler: this.handler,
        nextNodeId: this.nextNodeId,
        userId: window.userId,
      }, { xhrFields: { withCredentials: true } }).then(() => {
        this.dialogVisible = true;
      });
      // 不要接口
      // this.dialogVisible = true;
      // const date = new Date();
      // this.handleTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      // const newBlock = {
      //   businessType: this.businessType,
      //   currentNodeId: this.currentNodeId,
      //   currentNodeName: this.currentNodeName,
      //   currentNodeLocation: this.currentNodeLocation,
      //   itemId: this.itemId,
      //   origin: this.origin,
      //   itemName: this.itemName,
      //   barcode: this.barcode,
      //   qualityId: this.qualityId,
      //   authenticationId: this.authenticationId,
      //   transactionId: this.transactionId,
      //   nextNodeId: this.nextNodeId,
      //   nextNodeName: this.nextNodeName,
      //   nextNodeLocation: this.nextNodeLocation,
      //   handler: this.handler,
      //   handleTime: this.handleTime,
      // };
      // blocks.unshift(newBlock);
    },
    goHistory() {
      this.dialogVisible = false;
      this.$router.push({ path: '/history', query: { newBlock: true } });
    },
    goOnChain() {
      this.dialogVisible = false;
      this.itemId = '';
      this.itemName = '';
      this.origin = '';
      this.barcode = '';
      this.qualityId = '';
      this.authenticationId = '';
      this.nextNodeId = '';
      this.nextNodeName = '';
      this.nextNodeLocation = '';
      this.handler = '';
    },
    // 商品ID输入框失去焦点时
    itemIdBlur() {
      // 前端mock
      const tmpArr = constants.items;
      if (this.itemId !== '') {
        for (let i = 0; i < tmpArr.length; i += 1) {
          if (this.itemId === tmpArr[i].itemId) {
            this.itemName = tmpArr[i].itemName;
            this.origin = tmpArr[i].origin;
            this.barcode = tmpArr[i].barcode;
            this.qualityId = tmpArr[i].qualityId;
            this.authenticationId = tmpArr[i].authenticationId;
            break;
          }
        }
      }
    },
    nextNodeIdBlur() {
      // 前端mock
      const tmpArr = constants.users;
      if (this.itemId !== '') {
        for (let i = 0; i < tmpArr.length; i += 1) {
          if (this.nextNodeId === tmpArr[i].currentNodeId) {
            this.nextNodeName = tmpArr[i].currentNodeName;
            this.nextNodeLocation = tmpArr[i].currentNodeLocation;
            break;
          }
        }
      }
    },
  },
  mounted() {
    // 不要接口
    // 这四项是不输入商品ID也会自动根据用户系统的用户数据结构里拿出来，但我们没做用户系统，就只有mock
    const tmpArr = constants.users;
    for (let i = 0; i < tmpArr.length; i += 1) {
      if (window.username === tmpArr[i].name) {
        this.businessType = tmpArr[i].businessType;
        this.currentNodeId = tmpArr[i].currentNodeId;
        this.currentNodeName = tmpArr[i].currentNodeName;
        this.currentNodeLocation = tmpArr[i].currentNodeLocation;
        break;
      }
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

