<template>
  <div class="home">
    <animation-page></animation-page>
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
        <input type="text" name="searchId" id="searchId" :placeholder="getPlaceHolder">
        <img src="../../static/searchButton.png" id="searchButton">
      </div>
    </div>
  </div>
</template>

<script>
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
    };
  },
  components: {
    AnimationPage,
  },
  methods: {
    goOnChain() {
      const login = true;
      if (login) {
        this.$router.push({ path: '/onChain' });
      } else {
        this.$router.push({ path: '/login' });
      }
    },
    searchHistory() {
      const login = true;
      if (login) {
        this.$router.push({ path: '/history' });
      } else {
        this.$router.push({ path: '/login' });
      }
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
  height: 50px;
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
  height: 500px;
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
  margin: 0 auto;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #194EA0;
  width: 450px;
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
  left: -50px;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>

<style>
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
</style>
