<template>
  <div class="history">
    <img
      class="historyBackground"
      src="../../static/searchAndHistoryBackground.jpg">

    <img
      class="home" @click="backHome" src="../../static/homeButton.png">
    <img
      class="onChain" @click="goOnChain" id="onChain"
      v-show="language === 'Chinese'" src="../../static/onChain.png">

    <div id="result">
      <div
        class="blocks">
          <div
            class="block" @click="clickBlock(block)"
            v-for="(block, index) in blocks" :key="index.toString()">
            <div class="block-item-head">交易单号: {{block.transactionId}}</div>
            <div class="block-item">{{getItemId}}: {{block.itemId}}</div>
            <!-- <div class="block-item">{{getBusinessType}}: {{block.businessType}}</div> -->
            <!-- <div class="block-item">index: {{index}}</div> -->
            <!-- <div class="block-item">产地: {{block.origin}}</div> -->
            <!-- <div class="block-item">质检ID: {{block.qualityId}}</div> -->
            <!-- <div class="block-item">工厂认证证书ID: {{block.authenticationId}}</div> -->
            <!-- <div class="block-item">交易单号: {{block.transactionId}}</div> -->
            <!-- <div class="block-item">本站地址: {{block.currentNodeLocation}}</div> -->
            <!-- <div class="block-item">{{getHandleTime}}: {{block.handleTime}}</div> -->
            <div class="block-item">{{getNextNodeId}}: {{block.nextNodeId}}</div>
            <div class="block-item">下站名称: {{block.nextNodeName}}</div>
            <div class="block-item">{{getHandler}}: {{block.handler}}</div>
            <div class="block-item">{{getHandleTime}}: {{block.handleTime}}</div>
<!--             <div class="block-item">{{getCurrentNodeId}}: {{block.currentNodeId}}</div>
            <div class="block-item">本站名称: {{block.currentNodeName}}</div> -->
            <!-- <div class="block-item">本站地址: {{block.currentNodeLocation}}</div> -->
            <!-- <div class="block-item">下站地址: {{block.nextNodeLocation}}</div> -->
          </div>
      </div>
      <el-dialog
        :title="this.getDialogTitle"
        :visible.sync="dialogVisible"
        width="30%"
        :show-close="false"
        :modal-append-to-body="false">
          <div class="dialog-block-item">
          {{this.getTransactionId}}: {{this.dialogBlock.transactionId}}</div>
          <div class="dialog-block-item">
          {{this.getItemId}}: {{this.dialogBlock.itemId}}</div>
          <div class="dialog-block-item">
          {{this.getItemName}}: {{this.dialogBlock.itemName}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeId}}: {{this.dialogBlock.nextNodeId}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeName}}: {{this.dialogBlock.nextNodeName}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeLocation}}: {{this.dialogBlock.nextNodeLocation}}</div>
          <div class="dialog-block-item">
          {{this.getHandler}}: {{this.dialogBlock.handler}}</div>
          <div class="dialog-block-item">
          {{this.getHandleTime}}: {{this.dialogBlock.handleTime}}</div>
          <div class="dialog-block-item">
          {{this.getOrigin}}: {{this.dialogBlock.origin}}</div>
          <div class="dialog-block-item">
          {{this.getQualityId}}: {{this.dialogBlock.qualityId}}</div>
          <div class="dialog-block-item">
          {{this.getAuthenticationId}}: {{this.dialogBlock.authenticationId}}</div>
          <div class="dialog-block-item">
          {{this.getBusinessType}}: {{this.dialogBlock.businessType}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeId}}: {{this.dialogBlock.currentNodeId}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeName}}: {{this.dialogBlock.currentNodeName}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeLocation}}: {{this.dialogBlock.currentNodeLocation}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import blocks from '@/utils/fakeData';
import constants from '@/utils/constants';

export default {
  name: 'History',
  data() {
    return {
      msg: '',
      blocks: [],
      dialogVisible: false,
      dialogBlock: {},
      language: 'Chinese',
    };
  },
  methods: {
    backHome() {
      this.$router.push({ path: '/' });
    },
    // 点击上链按钮
    goOnChain() {
      if (window.login) {
        this.$router.push({ path: '/onChain' });
      } else {
        this.$router.push({ path: '/login', query: { operation: 'onChain' } });
      }
    },
    // 点击某一个区块打开完整信息
    clickBlock(block) {
      this.dialogVisible = true;
      this.dialogBlock = block;
    },
  },
  mounted() {
    // 真实接口
    this.axios.post(`${constants.ip}/user/trace`, {
      username: this.username,
      userId: window.userId,
    }).then((response) => {
      console.log('history response: ', response);
      this.blocks = response.data.data;
      this.$message({
        message: '查询历史记录成功',
        type: 'success',
      });
    });

    // 不要接口
    // this.blocks = blocks;
    // if (this.$route.query.newBlock) {

    //   const nodes = document.getElementsByClassName('block');
    //   console.log('nodes: ', nodes);
    //   // nodes[0].style.animationName = 'fadeToggle';
    //   // nodes[0].style.animationDuration = '1s';
    //   // nodes[0].style.animationTimingFunction = 'ease-out';
    //   nodes[0].style.animationPlayState = 'running';
    // }
  },
  updated() {
    // 如果是商户刚上链之后来到这个页面，给一个高亮显示
    if (this.$route.query.newBlock && document.getElementsByClassName('block').length > 0) {
      const nodes = document.getElementsByClassName('block');
      nodes[0].style.animationPlayState = 'running';
    }
  },
  computed: {
    getPlaceHolder() {
      return this.language === 'Chinese' ? '请输入商品ID...' : 'Please enter ID...';
    },
    getEmptyResult() {
      return this.language === 'Chinese' ? '未查到相关数据，请检查ID是否正确...' : 'Data not found, please check...';
    },
    getDialogTitle() {
      return this.language === 'Chinese' ? '完整区块信息' : 'Complete block infos';
    },
    getBusinessType() {
      return this.language === 'Chinese' ? '商家类型' : 'businessType';
    },
    getItemId() {
      return this.language === 'Chinese' ? '商品ID' : 'itemId';
    },
    getItemName() {
      return this.language === 'Chinese' ? '商品名称' : 'itemName';
    },
    getOrigin() {
      return this.language === 'Chinese' ? '产地' : 'origin';
    },
    getQualityId() {
      return this.language === 'Chinese' ? '质检ID' : 'qualityId';
    },
    getAuthenticationId() {
      return this.language === 'Chinese' ? '工厂认证证书ID' : 'authenticationId';
    },
    getTransactionId() {
      return this.language === 'Chinese' ? '交易单号' : 'transactionId';
    },
    getCurrentNodeId() {
      return this.language === 'Chinese' ? '本站ID' : 'currentNodeId';
    },
    getCurrentNodeName() {
      return this.language === 'Chinese' ? '本站名称' : 'currentNodeName';
    },
    getCurrentNodeLocation() {
      return this.language === 'Chinese' ? '本站地址' : 'currentNodeLocation';
    },
    getHandler() {
      return this.language === 'Chinese' ? '经办人' : 'handler';
    },
    getHandleTime() {
      return this.language === 'Chinese' ? '经办时间' : 'handleTime';
    },
    getNextNodeId() {
      return this.language === 'Chinese' ? '下站ID' : 'nextNodeId';
    },
    getNextNodeName() {
      return this.language === 'Chinese' ? '下站名称' : 'nextNodeName';
    },
    getNextNodeLocation() {
      return this.language === 'Chinese' ? '下站地址' : 'nextNodeLocation';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.history {
  position: relative;
  width: 100%;
  height: 100%;
}

.historyBackground {
  width: 100%;
  height: 100%;
}

.home {
  position: absolute;
  left: 75%;
  top: 8%;
  width: 6%;
  height: 6%;
  cursor: pointer;
  opacity: 0.8;
}

.onChain {
  position: absolute;
  left: 81%;
  top: 8%;
  width: 6%;
  height: 6%;
  cursor: pointer;
  animation: buttonUp 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

#result {
  position: absolute;
  left: 15%;
  top: 29%;
  width: 85%;
  height: 71%;
  overflow: auto;
}

.blocks {
  width: 100%;
  height: 100%;
  padding-left: 3%;
  text-align: left;
}

.block {
  position: relative;
  display: inline-block;
  margin: 0 50px 28px 0;
  padding: 10px 20px 20px 20px;
  width: 24%;
  height: 30%;
  background-color: rgba(41, 171, 226, 0.22);
  overflow: auto;
  font-size: 16px;
  text-align: left;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  animation: fadeToggle 1.5s ease-out .5s 2;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

.block:hover {
  /*border: 1px solid #D70C18;*/
  background-color: rgba(41, 171, 226, 0.32);
}

.block-item-head {
  /*margin: 10px;*/
  margin-bottom: 15px;
  padding-bottom: 10px;
  /*padding: 5px;*/
  border-bottom: 1px solid #fff;
  font-size: 22px;
  color: #fff;
}

.block-item {
  margin: 5px 0;
}

@keyframes fadeToggle {
  0 {background-color: rgba(41, 171, 226, 0.22)}
  50% {background-color: rgba(41, 171, 226, 0.82);}
  100% {background-color: rgba(41, 171, 226, 0.22)}
}
</style>

<style>
/*弹框部分*/
#result > .el-dialog__wrapper > .el-dialog {
  padding: 15px;
  background-color: transparent;
  background-color: rgba(41, 171, 226, 0.22);
  color: #fff;
  border: 2px solid #58f9f1;
  border-radius: 5%;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__header {
  text-align: center;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
  color: #58f9f1;
  font-size: 32px;
  font-weight: bold;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__body {
  padding: 20px;
  text-align: left;
  font-size: 18px;
  color: #fff;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__body > .dialog-block-item {
  margin: 5px;
}

#result > .el-dialog__wrapper > .el-dialog >.el-dialog__footer > .dialog-footer {
  text-align: center;
}

#result > .el-dialog__wrapper > .el-dialog >.el-dialog__footer > .dialog-footer > .el-button {
  background-color: transparent;
  display: inline-block;
  margin: 0 auto;
  border: 2px solid #58f9f1;
  /*border-radius: 30%;*/
  width: 30%;
  height: 5%;
  font-size: 16px;
  cursor: pointer;
}

#result > .el-dialog__wrapper > .el-dialog >
.el-dialog__footer > .dialog-footer > .el-button:hover {
  /*transform: scale(1.05, 1.05);*/
  background-color: rgba(41, 171, 226, 0.32);
}

#result > .v-modal {
  opacity: 0.8;
}
</style>
