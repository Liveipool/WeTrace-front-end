<template>
  <div class="home">
    <animation-page></animation-page>
    <input type="search" name="searchId" id="searchId" placeholder="请输入物品ID...">
  </div>
</template>

<script>
import AnimationPage from './AnimationPage'

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
    };
  },
  components: {
    AnimationPage,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
}

#searchID {
  margin: 0;

}

</style>
