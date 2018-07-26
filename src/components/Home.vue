<template>
  <div class="home">
    <!-- <animation-page></animation-page> -->
    <div id="headBar">
      <div id="language">语言</div>
      <!-- <button id="onChain" @click="goOnChain">上链</button> -->
      <!-- <button id="history" @click="searchHistory">上链历史</button> -->
    </div>
<!--     <img src="../../static/smallLogo.png" class="smallLogo">
    <img src="../../static/homeCenter.png" class="homeCenter">
    <input type="text" name="searchId" id="searchId" placeholder="请输入物品ID...">
    <img src="../../static/searchButton.png" class="searchButton"> -->
  </div>
</template>

<script>
import AnimationPage from './AnimationPage';

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
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
  background: yellow;
}

#language {
  display: inline-block;
  position: relative;
  left: 0;
  top: 0;
  width: 100px;
  height: 30px;
}

#onChain,
#history {
  display: inline-block;
  position: relative;
  border: 1px solid black;
  outline: none;
  width: 80px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
}

#onChain {
  top: 10px;
  right: 100px;
}

#history {
  right: 10px;
  top: 10px;
}

#searchId {
  display: inline-block;
  position: relative;
  top: 30%;
  margin: 0 auto;
  padding: 10px;
  width: 450px;
  height: 40px;
  font-size: 16px;
  outline: none;
}

</style>
