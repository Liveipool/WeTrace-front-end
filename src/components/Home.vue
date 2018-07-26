<template>
  <div class="home">
    <!-- <animation-page></animation-page> -->
    <button id="onChain" @click="goOnChain">上链</button>
    <input type="text" name="searchId" id="searchId" placeholder="请输入物品ID...">
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
}

#onChain {
  position: absolute;
  top: 10px;
  right: 20px;
  display: inline-block;
  border: 0;
  outline: none;
  width: 80px;
  height: 40px;
  background-color: #194EA0;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
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
