<template>
  <div class="home">
    <img
      class="homeBackground" v-show="language === 'Chinese' && !showResult" src="../../static/homeBackground.jpg">
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
      src="../../static/homeBackgroundAfterSearch.jpg">

    <div class="blocks"></div>
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
        this.buttonAnimate();
        this.searchAnimate();
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
  },
  computed: {
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
  left: 72%;
  top: 15%;
  width: 7%;
  height: 5%;
  cursor: pointer;
  animation: buttonUp 1s ease-out 1;
  animation-play-state: paused;
  animation-fill-mode: forwards;
}

.onChain {
  position: absolute;
  left: 81%;
  top: 15%;
  width: 5%;
  height: 5%;
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

@keyframes buttonUp {
  0 {top: 15%;}
  100% {top: 10%;}
}

@keyframes searchAnimate {
  0 {top: 25%; width: 30%; left: 60%;}
  100% {top: 15%; width: 16%; left: 71.5%;}
}
@keyframes searchButtonAnimate {
  0 {width: 6%; height: 65%;}
  100% {width: 7%; height: 50%;}
}
</style>
