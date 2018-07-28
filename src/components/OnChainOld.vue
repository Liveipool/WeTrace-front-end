<template>
  <div class="onChain">
    <el-select v-model="value" placeholder="请选择商家类型">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <input id="itemId" type="text" name="itemId" placeholder="请输入物品ID">
    <input id="origin" type="text" name="origin" placeholder="请输入产地">
    <input id="qualityId" type="text" name="qualityId" placeholder="请输入质检ID">
    <input id="authenticationId" type="text" name="authenticationId" placeholder="请输入工厂认证证书ID">
    <input id="transactionId" type="text" name="transactionId" placeholder="请输入交易单号">
    <input id="currentNodeId" type="text" name="currentNodeId" placeholder="请输入本站ID">
    <input id="currentNodeName" type="text" name="currentNodeName" placeholder="请输入本站名称">
    <input id="currentNodeLocation" type="text" name="currentNodeLocation" placeholder="请输入本站地址">
    <input id="handler" type="text" name="handler" placeholder="请输入经办人">
    <input id="handleTime" type="text" name="handleTime" placeholder="请输入经办时间">
    <input id="nextNodeId" type="text" name="nextNodeId" placeholder="请输入下站ID">
    <input id="nextNodeName" type="text" name="nextNodeName" placeholder="请输入下站名称">
    <input id="nextNodeLocation" type="text" name="nextNodeLocation" placeholder="请输入下站地址">
  </div>
</template>

<script>
export default {
  name: 'OnChain',
  data() {
    return {
      options: [{
        value: '品牌商',
        label: '品牌商',
      }, {
        value: '生产商',
        label: '生产商',
      }, {
        value: '渠道商',
        label: '渠道商',
      }, {
        value: '零售商',
        label: '零售商',
      }],
      value: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
