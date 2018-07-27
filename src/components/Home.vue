<template>
  <div class="home">
    <img class="homeBackground" v-show="language === 'Chinese'" src="../../static/homeBackground.jpg">
    <img class="homeBackground" v-if="language === 'English'" src="../../static/homeBackgroundEnglish.jpg">
    <div id="languages" @click="chooseLanguage">
      <div id="Chinese">中文</div>
      <div id="English">English</div>
    </div>
    <img class="history" @click="searchHistory" v-show="language === 'Chinese'" src="../../static/history.png">
    <img class="history" @click="searchHistory" v-show="language === 'English'" src="../../static/historyEnglish.png">
    <img class="onChain" @click="goOnChain" v-show="language === 'Chinese'" src="../../static/onChain.png">
    <img class="onChain" @click="goOnChain" v-show="language === 'English'" src="../../static/onChainEnglish.png">
    <div id="search">
      <input
        type="text" name="searchId"
        id="searchId" :placeholder="getPlaceHolder"
        @keyup="keyUpEnter" autofocus="autofocus">
      <img src="../../static/searchButton.png" id="searchButton" @click='searchResult'>
    </div>
    <div id="emptyResult" v-show="showEmptyHint && result.length === 0">{{ getEmptyResult }}</div>
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
      if (test.length !== 0) {
        this.showEmptyHint = true;
      } else {
        this.showResult = true;
        // this.centerAnimate();
      }
    },
    // 控制logo和输入框的动画
    centerAnimate() {
      const center = document.getElementById('center');
      center.style.animationPlayState = 'running';
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
}

.onChain {
  position: absolute;
  left: 81%;
  top: 15%;
  width: 5%;
  height: 5%;
  cursor: pointer;
}

#search {
  position: absolute;
  left: 60%;
  top: 25%;
  width: 30%;
  height: 5%;
}

#searchId {
  display: inline-block;
  margin: 0 auto;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #194EA0;
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
  border-bottom: 1px solid #3399FF;
}

#searchButton {
  display: inline-block;
  position: relative;
  left: -9%;
  top: 3%;
  width: 6%;
  height: 65%;
  cursor: pointer;
}

#emptyResult {
  position: absolute;
  left: 62%;
  top: 32%;
  font-size: 18px;
  color: #fff;
}
</style>
