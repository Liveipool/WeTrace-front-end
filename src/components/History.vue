<template>
  <div class="history">
    <div class="stepsContainer" :style="{height: `${Math.ceil(blocks.length / 3) * 200}px`}">
      <el-steps direction="vertical">
        <el-step title="" description="2018/7"></el-step>
        <el-step title="" description="2018/6"></el-step>
        <el-step title="" description="2018/5"></el-step>
        <el-step title="" description="2018/4"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
import blocks from '@/utils/fakeData';

export default {
  name: 'History',
  data() {
    return {
      msg: '',
      blocks,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<style>
/*时间轴部分*/
.history > .stepsContainer > .el-steps > .el-step > .el-step__head {
  color: #194EA0;
}
.history > .stepsContainer > .el-steps > .el-step > .el-step__head > .el-step__line {
  background-color: #194EA0;
}
.history > .stepsContainer > .el-steps > .el-step > .el-step__head > .el-step__icon {
  border: 1px solid #194EA0;
}

.history > .stepsContainer > .el-steps > .el-step > .el-step__main > .el-step__description {
  color: #194EA0;
}
</style>
