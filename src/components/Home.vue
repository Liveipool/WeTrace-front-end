<template>
  <div class="home">
    <img
      class="homeBackground" v-show="language === 'Chinese'
      && !showResult" src="../../static/homeBackground.jpg">
    <img
      class="homeBackground" v-show="language === 'English' && !showResult"
      src="../../static/homeBackgroundEnglish.jpg">
    <div id="languages" @click="chooseLanguage" v-show="!showResult">
      <div id="Chinese">中文</div>
      <div id="English">English</div>
    </div>
    <img
      class="history" @click="searchHistory" id="history"
      v-show="language === 'Chinese'" src="../../static/history.png">
    <img
      class="history" @click="searchHistory" id="historyEnglish"
      v-show="language === 'English'" src="../../static/historyEnglish.png">
    <img
      class="onChain" @click="goOnChain" id="onChain"
      v-show="language === 'Chinese'" src="../../static/onChain.png">
    <img
      class="onChain" @click="goOnChain" id="onChainEnglish"
      v-show="language === 'English'" src="../../static/onChainEnglish.png">
    <div id="search">
      <input
        type="text" name="searchId"
        id="searchId" :placeholder="getPlaceHolder"
        @keyup="keyUpEnter" autofocus="autofocus">
      <img
        src="../../static/searchButton.png"
        id="searchButton" @click='searchResult'>
    </div>
    <div
      id="emptyResult" v-show="showEmptyHint && result.length === 0">
    {{ getEmptyResult }}</div>

    <img
      class="homeBackground" v-show="showResult"
      src="../../static/searchAndHistoryBackground.jpg">

    <div id="result" v-show="showResult">
      <div
        class="blocks">
          <div
            class="block" @click="clickBlock(block)"
            v-for="(block, index) in blocks" :key="index.toString()">
            <div class="block-item-head">{{block.businessType}}</div>
            <!-- <div class="block-item">index: {{index}}</div> -->
            <div class="block-item">{{getItemId}}: {{block.itemId}}</div>
            <!-- <div class="block-item">条形码: {{block.barcode}}</div> -->
            <!-- <div class="block-item">产地: {{block.origin}}</div> -->
            <!-- <div class="block-item">质检Id: {{block.qualityId}}</div> -->
            <!-- <div class="block-item">工厂认证证书Id: {{block.authenticationId}}</div> -->
            <!-- <div class="block-item">物流单号: {{block.logistics}}</div> -->
            <!-- <div class="block-item">本站地址: {{block.currentNodeLocation}}</div> -->
            <div class="block-item">{{getHandler}}: {{block.handler}}</div>
            <div class="block-item">{{getHandleTime}}: {{block.handleTime}}</div>
            <div class="block-item">{{getCurrentNodeId}}: {{block.currentNodeId}}</div>
            <!-- <div class="block-item">本站名称: {{block.currentNodeName}}</div> -->
            <!-- <div class="block-item">本站地址: {{block.currentNodeLocation}}</div> -->
            <div class="block-item">{{getNextNodeId}}: {{block.nextNodeId}}</div>
            <!-- <div class="block-item">下站名称: {{block.nextNodeName}}</div> -->
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
          {{this.getBusinessType}}: {{this.dialogBlock.businessType}}</div>
          <div class="dialog-block-item">
          {{this.getItemId}}: {{this.dialogBlock.itemId}}</div>
          <div class="dialog-block-item">
          {{this.getBarcode}}: {{this.dialogBlock.barcode}}</div>
          <div class="dialog-block-item">
          {{this.getOrigin}}: {{this.dialogBlock.origin}}</div>
          <div class="dialog-block-item">
          {{this.getQualityId}}: {{this.dialogBlock.qualityId}}</div>
          <div class="dialog-block-item">
          {{this.getAuthenticationId}}: {{this.dialogBlock.authenticationId}}</div>
          <div class="dialog-block-item">
          {{this.getLogistics}}: {{this.dialogBlock.logistics}}</div>
          <div class="dialog-block-item">
          {{this.getHandler}}: {{this.dialogBlock.handler}}</div>
          <div class="dialog-block-item">
          {{this.getHandleTime}}: {{this.dialogBlock.handleTime}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeId}}: {{this.dialogBlock.currentNodeId}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeName}}: {{this.dialogBlock.currentNodeName}}</div>
          <div class="dialog-block-item">
          {{this.getCurrentNodeLocation}}: {{this.dialogBlock.currentNodeLocation}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeId}}: {{this.dialogBlock.nextNodeId}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeName}}: {{this.dialogBlock.nextNodeName}}</div>
          <div class="dialog-block-item">
          {{this.getNextNodeLocation}}: {{this.dialogBlock.nextNodeLocation}}</div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import blocks from '@/utils/fakeData';

export default {
  name: 'Home',
  data() {
    return {
      language: 'Chinese',
      result: [],
      showEmptyHint: false,
      showResult: false,
      blocks,
      dialogVisible: false,
      dialogBlock: {},
    };
  },
  methods: {
    chooseLanguage(e) {
      const Chinese = document.getElementById('Chinese');
      const English = document.getElementById('English');
      if (e.target.innerHTML === '中文') {
        Chinese.style.border = '1px solid #fff';
        English.style.border = '1px solid transparent';
        this.language = 'Chinese';
      } else if (e.target.innerHTML === 'English') {
        English.style.border = '1px solid #fff';
        Chinese.style.border = '1px solid transparent';
        this.language = 'English';
      }
    },
    // 点击上链按钮
    goOnChain() {
      if (window.login) {
        this.$router.push({ path: '/onChain' });
      } else {
        this.$router.push({ path: '/login', query: { operation: 'onChain' } });
      }
    },
    // 点击上链历史按钮
    searchHistory() {
      if (window.login) {
        this.$router.push({ path: '/history' });
      } else {
        this.$router.push({ path: '/login', query: { operation: 'history' } });
      }
    },
    // 输入框里按回车
    keyUpEnter(e) {
      if (e.target.value !== '') {
        if (e.key === 'Enter' || e.key === 'enter') {
          this.searchResult();
        }
      }
    },
    // 搜索结果
    searchResult() {
      // 从后端取到搜索结果
      // const test = this.emptyRe;
      const test = this.blocks;
      if (test.length === 0) {
        this.showEmptyHint = true;
      } else {
        this.showResult = true;
        this.buttonAnimate();
        this.searchAnimate();
        this.resultAnimate();
      }
    },
    // 控制两个跳转按钮的动画
    buttonAnimate() {
      const history = document.getElementById('history');
      const historyEnglish = document.getElementById('historyEnglish');
      const onChain = document.getElementById('onChain');
      const onChainEnglish = document.getElementById('onChainEnglish');
      history.style.animationPlayState = 'running';
      historyEnglish.style.animationPlayState = 'running';
      onChain.style.animationPlayState = 'running';
      onChainEnglish.style.animationPlayState = 'running';
    },
    // 控制搜索框的动画
    searchAnimate() {
      const search = document.getElementById('search');
      const searchButton = document.getElementById('searchButton');
      search.style.animationPlayState = 'running';
      searchButton.style.animationPlayState = 'running';
    },
    // 控制结果部分的动画
    resultAnimate() {
      const result = document.getElementById('result');
      result.style.animationPlayState = 'running';
    },
    // 点击某一个区块打开完整信息
    clickBlock(block) {
      this.dialogVisible = true;
      this.dialogBlock = block;
    },
  },
  computed: {
    getPlaceHolder() {
      return this.language === 'Chinese' ? '请输入物品ID...' : 'Please enter ID...';
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
      return this.language === 'Chinese' ? '物品Id' : 'itemId';
    },
    getBarcode() {
      return this.language === 'Chinese' ? '条形码' : 'barcode';
    },
    getOrigin() {
      return this.language === 'Chinese' ? '产地' : 'origin';
    },
    getQualityId() {
      return this.language === 'Chinese' ? '质检Id' : 'qualityId';
    },
    getAuthenticationId() {
      return this.language === 'Chinese' ? '工厂认证证书Id' : 'authenticationId';
    },
    getLogistics() {
      return this.language === 'Chinese' ? '物流单号' : 'logistics';
    },
    getCurrentNodeId() {
      return this.language === 'Chinese' ? '本站Id' : 'currentNodeId';
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
      return this.language === 'Chinese' ? '下站Id' : 'nextNodeId';
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
.home {
  position: relative;
  width: 100%;
  height: 100%;
}

.homeBackground {
  width: 100%;
  height: 100%;
}

#languages {
  color: #fff;
  font-size: 18px;
}

#Chinese {
  position: absolute;
  left: 6%;
  top: 25%;
  width: 50px;
  height: 22px;
  padding: 2px;
  border: 1px solid #fff;
  cursor: pointer;
}

#English {
  position: absolute;
  left: 11%;
  top: 25%;
  width: 70px;
  height: 22px;
  padding: 2px;
  cursor: pointer;
}

.history {
  position: absolute;
  left: 71%;
  top: 15%;
  width: 8%;
  height: 6%;
  cursor: pointer;
  animation: buttonUp 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

.onChain {
  position: absolute;
  left: 80%;
  top: 15%;
  width: 6%;
  height: 6%;
  cursor: pointer;
  animation: buttonUp 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

#search {
  position: absolute;
  left: 60%;
  top: 25%;
  width: 30%;
  height: 5%;
  animation: searchAnimate 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

#searchId {
  display: inline-block;
  margin: 0 auto;
  padding: 3px;
  border: 0;
  border-bottom: 2px solid #58f9f1;
  background-color: transparent;
  width: 80%;
  height: 80%;
  font-size: 18px;
  color: #fff;
  outline: none;
}
#searchId::-webkit-input-placeholder {
  color: #e0e0e0;
}
#searchId:hover {
  border-bottom: 2px solid #3399FF;
}

#searchButton {
  display: inline-block;
  position: relative;
  left: -9%;
  top: 3%;
  width: 6%;
  height: 65%;
  cursor: pointer;
  animation: searchButtonAnimate 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

#emptyResult {
  position: absolute;
  left: 62%;
  top: 32%;
  font-size: 18px;
  color: #fff;
}

#result {
  position: absolute;
  left: 15%;
  top: 29%;
  width: 85%;
  height: 71%;
  overflow: auto;
  opacity: 0;
  animation: showResult 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

.blocks {
  width: 100%;
  height: 100%;
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
}

.block:hover {
  background-color: rgba(41, 171, 226, 0.32);
}

.block-item-head {
  /*margin: 10px;*/
  margin-bottom: 15px;
  padding-bottom: 10px;
  /*padding: 5px;*/
  border-bottom: 1px solid #fff;
  font-size: 24px;
  color: #fff;
}

.block-item {
  margin: 5px 0;
}

@keyframes buttonUp {
  0 {top: 15%;}
  100% {top: 9%;}
}

@keyframes searchAnimate {
  0 {top: 25%; width: 30%; left: 60%;}
  100% {top: 15%; width: 17%; left: 71%;}
}

@keyframes searchButtonAnimate {
  0 {width: 6%; height: 65%;}
  100% {width: 7%; height: 50%;}
}

@keyframes showResult {
  0 {opacity: 0;}
  100% {opacity: 1;}
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
  background-color: rgba(41, 171, 226, 0.32);
}

#result > .v-modal {
  opacity: 0.8;
}
</style>

