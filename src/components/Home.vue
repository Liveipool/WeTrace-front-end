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

    <div id="result" v-if="showResult">
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

      <div class="blocks" v-for="(block, index) in blocks" :key="index.toString()">
        <div class="block">
          <div class="block-item">index: {{index}}</div>
          <div class="block-item">物品Id: {{block.itemId}}</div>
          <div class="block-item">条形码: {{block.barcode}}</div>
          <div class="block-item">产地: {{block.origin}}</div>
          <div class="block-item">质检Id: {{block.qualityId}}</div>
          <div class="block-item">工厂认证证书Id: {{block.authenticationId}}</div>
          <div class="block-item">物流单号: {{block.logistics}}</div>
          <div class="block-item">本站id: {{block.currentNodeId}}</div>
          <div class="block-item">本站名称: {{block.currentNodeName}}</div>
          <div class="block-item">本站地址: {{block.currentNodeLocation}}</div>
          <div class="block-item">经办人: {{block.handler}}</div>
          <div class="block-item">经办时间: {{block.time}}</div>
          <div class="block-item">下站Id: {{block.nextNodeId}}</div>
          <div class="block-item">下站名称: {{block.nextNodeName}}</div>
          <div class="block-item">下站地址: {{block.nextNodeLocation}}</div>
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
    };
  },
  components: {
    AnimationPage,
  },
  methods: {
    // 点击上链按钮
    goOnChain() {
      const login = true;
      if (login) {
        this.$router.push({ path: '/onChain' });
      } else {
        this.$router.push({ path: '/login' });
      }
    },
    // 点击上链历史按钮
    searchHistory() {
      const login = true;
      if (login) {
        this.$router.push({ path: '/history' });
      } else {
        this.$router.push({ path: '/login' });
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
  height: 200px;
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
  animation: fadeIn 1s;
  /*animation-fill-mode: forwards;*/
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
  /*height: calc(100vh - 260px);*/
  height: 800px;
  overflow-y: auto;
  animation: fadeIn 1s;
  /*animation: fadeIn 1s ease-in-out 0 1;*/
  animation-play-state: paused;
  /*animation-fill-mode: forwards;*/
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
  overflow: auto;
  color: #000;
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

@keyframes fadeIn {
/*  0 {opacity: 0;}
  100% {opacity: 1;}*/
  0 {color: red;}
  100% {color: yellow;}
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
</style>
