<template>
  <div class="animation-page">
    <div id='leftBackground'></div>
    <div id='rightBackground'></div>
    <div class="name" id="first">We</div>
    <div class="name" id="last">Trace</div>
  </div>
</template>

<script>
export default {
  name: 'AnimationPage',
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#leftBackground {
  position: absolute;
  display: inline-block;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: #D70C18;
  background: linear-gradient(250deg, transparent 25%, #D70C18 0);
  animation: backgroundToLeft 1.5s 1s 1;
  animation-fill-mode: forwards;
}

#rightBackground {
  position: absolute;
  display: inline-block;
  left: 39%;
  width: 61%;
  height: 100%;
  background-color: #194EA0;
  background: linear-gradient(70deg, transparent 25%, #194EA0 0);
  animation: backgroundToRight 1.5s 1s 1;
  animation-fill-mode: forwards;
}

.name {
  position: absolute;
  color: #fff;
  font-size: 200px;
  font-weight: bold;
  font-family: fantasy;
}

#first {
  left: 35%;
  top: 35%;
  animation: nameToLeft 1.5s 1s 1;
  animation-fill-mode: forwards;
}

#last {
  left: 49%;
  top: 35%;
  animation: nameToRight 1.5s 1s 1;
  animation-fill-mode: forwards;
}

@keyframes backgroundToLeft {
  0 {left: 0;}
  100% {left: -100%;}
}

@keyframes backgroundToRight {
  0 {left: 39%;}
  100% {left: 200%;}
}

@keyframes nameToLeft {
  0 {left: 35%;}
  100% {left: -65%;}
}

@keyframes nameToRight {
  0 {left: 49%;}
  100% {left: 210%;}
}
</style>
