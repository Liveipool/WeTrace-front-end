<template>
  <div class="home">
    <!-- <animation-page></animation-page> -->

    <div id="headBar">
      <el-select class='language' v-model="language" placeholder="语言">
        <el-option
          v-for="item in languages"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <button id="onChain" @click="goOnChain">{{ getOnChainText }}</button>
      <button id="history" @click="searchHistory">{{ getHistoryText }}</button>
    </div>

    <div id="center">
      <div id="pics">
        <img src="../../static/homeCenter.png" id="homeCenter">
        <img src="../../static/smallLogo.png" id="smallLogo">
      </div>
      <div id="serach">
        <input
          type="text" name="searchId"
          id="searchId" :placeholder="getPlaceHolder"
          @keyup="keyUpEnter" autofocus="autofocus">
        <img src="../../static/searchButton.png" id="searchButton" @click='searchResult'>
      </div>
    </div>

    <div id="emptyResult" v-show="showEmptyHint && result.length === 0">{{ getEmptyResult }}</div>

    <div id="result" v-show="showResult">
<!--       <div class="stepsContainer" :style="{height: `${Math.ceil(blocks.length / 3) * 200}px`}">
        <el-steps direction="vertical">
          <el-step title="" description="2018/7"></el-step>
          <el-step title="" description="2018/6"></el-step>
          <el-step title="" description="2018/5"></el-step>
          <el-step title="" description="2018/4"></el-step>
        </el-steps>
      </div> -->
<!--       <div class="chains">
        <div class="horizontal"></div>
        <div class="vertical"></div>
      </div> -->

      <div class="blocks">
        <div class="block" @click="clickBlock(block)" v-for="(block, index) in blocks" :key="index.toString()">
          <div class="block-item-head">{{block.businessType}}</div>
          <!-- <div class="block-item">index: {{index}}</div> -->
          <div class="block-item">{{getItemId}}: {{block.itemId}}</div>
          <!-- <div class="block-item">产地: {{block.origin}}</div> -->
          <!-- <div class="block-item">质检ID: {{block.qualityId}}</div> -->
          <!-- <div class="block-item">工厂认证证书ID: {{block.authenticationId}}</div> -->
          <!-- <div class="block-item">交易单号: {{block.transactionId}}</div> -->
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
        <div
          class="horizontal"
          v-show="parseInt(index) % 6 !== 2 && parseInt(index) % 6 !== 5
          && parseInt(index) !== (block.length - 1)"></div>
        <div
          class="vertical"
          v-show="(parseInt(index) % 6 === 2 || parseInt(index) % 6 === 3)
          && parseInt(index) !== (block.length - 1)"></div>
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
          {{this.getOrigin}}: {{this.dialogBlock.origin}}</div>
          <div class="dialog-block-item">
          {{this.getQualityId}}: {{this.dialogBlock.qualityId}}</div>
          <div class="dialog-block-item">
          {{this.getAuthenticationId}}: {{this.dialogBlock.authenticationId}}</div>
          <div class="dialog-block-item">
          {{this.getTransactionId}}: {{this.dialogBlock.transactionId}}</div>
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
import AnimationPage from './AnimationPage';

export default {
  name: 'Home',
  data() {
    return {
      language: 'Chinese',
      languages: [
        {
          value: 'Chinese',
          label: '中文',
        },
        {
          value: 'English',
          label: 'English',
        },
      ],
      showEmptyHint: false,
      showResult: false,
      result: [],
      emptyRe: [],
      blocks,
      dialogVisible: false,
      dialogBlock: {},
    };
  },
  components: {
    AnimationPage,
  },
  methods: {
    // 点击上链按钮
    goOnChain() {
      const login = false;
      if (login) {
        this.$router.push({ path: '/onChain' });
      } else {
        this.$router.push({ path: '/login', query: { operation: 'onChain' } });
      }
    },
    // 点击上链历史按钮
    searchHistory() {
      const login = false;
      if (login) {
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
        this.centerAnimate();
        this.resultAnimate();
      }
    },
    // 控制logo和输入框的动画
    centerAnimate() {
      const center = document.getElementById('center');
      center.style.animationPlayState = 'running';
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
    getOnChainText() {
      return this.language === 'Chinese' ? '上链' : 'onChain';
    },
    getHistoryText() {
      return this.language === 'Chinese' ? '上链历史' : 'history';
    },
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
      return this.language === 'Chinese' ? '物品ID' : 'itemId';
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
.home {
  position: relative;
  width: 100%;
  height: 100%;
}

#headBar {
  position: relative;
  width: 100%;
  height: 60px;
}

.language {
  position: absolute;
  left: 80px;
  top: 15px;
}

#onChain,
#history {
  display: inline-block;
  position: absolute;
  border-image: linear-gradient(45deg, #D70C18, #194EA0) 10 10;
  /*border-radius: 10px;*/
  outline: none;
  width: 80px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

#onChain:hover,
#history:hover {
  transform: scale(1.05, 1.05);
}

#onChain {
  right: 170px;
  top: 25px;
}

#history {
  right: 70px;
  top: 25px;
}

#center {
  margin: 170px auto 0 auto;
  width: 800px;
  height: 170px;
  animation: centerUp 0.5s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

#pics {
  width: 100%;
  margin-bottom: 10px;
}

#homeCenter {
  position: relative;
  top: 20px;
  left: -45px;
  width: 85px;
  height: 85px;
}

#smallLogo {
  position: relative;
  left: -40px;
  width: 240px;
  height: 38px;
}

#search {
  margin-top: 15px;
}

#searchId {
  display: inline-block;
  position: relative;
  left: -10px;
  margin: 0 auto;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #194EA0;
  width: 480px;
  height: 30px;
  font-size: 18px;
  outline: none;
}

#searchId:hover {
  border-bottom: 1px solid #3399FF;
}

#searchButton {
  display: inline-block;
  position: relative;
  left: -55px;
  top: 2px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}

#emptyResult {
  position: relative;
  left: -25px;
  font-size: 20px;
  color: #000;
}

#result {
  position: relative;
  margin: 0 100px;
  width: calc(100% - 200px);
  height: 800px;
  opacity: 0;
  overflow-y: auto;
  animation: showResult 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

/*.chains {
  z-index: 1;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
}

.horizontal {
  z-index: 1;
  background-color: #194EA0;
  margin: 98px 0 0 0;
  width: 100%;
  height: 2px;
}

.vertical {
  z-index: 1;
  background-color: #194EA0;
  position: relative;
  left: calc(100% - 50px);
  width: 2px;
  height: 300px;
}*/

.stepsContainer,
.blocks {
  position: relative;
  display: inline-block;
}

.block {
  margin: 50px;
  width: 350px;
  height: 300px;
  border: 1px solid #194EA0;
  /*border-image: linear-gradient(45deg, #D70C18, #194EA0) 350 350;*/
  overflow: auto;
  font-size: 18px;
  text-align: left;
  color: #000;
  cursor: pointer;
}

.block:hover {
  /*border: 1px solid #D70C18;*/
  transform: scale(1.01, 1.01);
}

.block-item-head {
  /*margin: 5px;*/
  padding: 5px;
  border-bottom: 1px solid #194EA0;
  font-size: 24px;
  color: #194EA0;
}

.block-item {
  margin: 5px;
}

.horizontal {
  position: absolute;
  left: 402px;
  top: 199px;
  width: 100px;
  height: 2px;
  background-color: #194EA0;
}

.vertical {
  position: absolute;
  left: 224px;
  top: 352px;
  width: 2px;
  height: 106px;
  background-color: #194EA0;
}

@keyframes centerUp {
  0 {margin-top: 200px;}
  100% {margin-top: 0;}
}

@keyframes centerDown {
  0 {margin-top: 0;}
  100% {margin-top: 200px;}
}

@keyframes showResult {
  0 {opacity: 0;}
  100% {opacity: 1;}
}

</style>

<style>
/*语言选择器部分*/
#headBar > .el-select > .el-input {
  font-size: 18px;
}

#headBar > .el-select > .el-input > .el-input__inner {
  border: 0;
  padding: 5px;
  width: 90px;
  color: #606060;
}

#headBar > .el-select > .el-input > .el-input__inner::-webkit-input-placeholder {
  color: #606060;
}

#headBar > .el-select > .el-input > .el-input__suffix {
  display: inline-block;
  margin-left: 5px;
}

#headBar > .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-input__icon {
  color: #606060;
}

/*时间轴部分*/
#result > .stepsContainer > .el-steps > .el-step > .el-step__head {
  color: #194EA0;
}
#result > .stepsContainer > .el-steps > .el-step > .el-step__head > .el-step__line {
  background-color: #194EA0;
}
#result > .stepsContainer > .el-steps > .el-step > .el-step__head > .el-step__icon {
  border: 1px solid #194EA0;
}

#result > .stepsContainer > .el-steps > .el-step > .el-step__main > .el-step__description {
  color: #194EA0;
}

/*弹框部分*/
#result > .el-dialog__wrapper > .el-dialog > .el-dialog__header {
  text-align: left;
  padding-left: 22px;
  border-bottom: 1px solid #194EA0;
  font-weight: bold;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
  font-size: 28px;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__body {
  padding: 20px;
  text-align: left;
  font-size: 18px;
  color: #000;
}

#result > .el-dialog__wrapper > .el-dialog > .el-dialog__body > .dialog-block-item {
  margin: 5px;
}

#result > .el-dialog__wrapper > .el-dialog >.el-dialog__footer > .dialog-footer > .el-button {
  background-color: transparent;
  border-image: linear-gradient(45deg, #D70C18, #194EA0) 10 10;
  color: #000;
  outline: none;
  width: 80px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
}

#result > .el-dialog__wrapper > .el-dialog >
.el-dialog__footer > .dialog-footer > .el-button:hover {
  transform: scale(1.05, 1.05);
}
</style>
