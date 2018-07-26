<template>
  <div class="animation-page">
    <div id='leftBackground' class="background"></div>
    <div id='rightBackground' class="background"></div>
    <div id="first" class="name">We</div>
    <div id="last" class="name">Trace</div>
    <img src="../../static/penguin.png" class="penguin">
    <img src="../../static/footprint.png" class="footprint" id="footprintOne">
    <img src="../../static/footprint.png" class="footprint" id="footprintTwo">
    <img src="../../static/footprint.png" class="footprint" id="footprintThree">
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
.background {
  position: absolute;
  display: inline-block;
  z-index: 10;
  animation-fill-mode: forwards;
}

.name {
  z-index: 11;
}

.penguin,
.footprint {
  position: absolute;
  z-index: 12;
}

#leftBackground {
  left: 0;
  width: 60%;
  height: 100%;
  background: linear-gradient(250deg, transparent 25%, #D70C18 0);
  animation: backgroundToLeft 1.5s 1s 1;
  animation-fill-mode: forwards;
}

#rightBackground {
  left: 39%;
  width: 61%;
  height: 100%;
  background: linear-gradient(70deg, transparent 25%, #194EA0 0);
  animation: backgroundToRight 1.5s 1s 1;
  animation-fill-mode: forwards;
}

.name {
  position: absolute;
  color: #fff;
  font-size: 13em;
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

.penguin {
  left: 13%;
  bottom: 13%;
  width: 13em;
  height: 15em;
  animation: penguinToLeft 1.5s 1s 1;
  animation-fill-mode: forwards;
}

.footprint {
  width: 5.5em;
  height: 5.5em;
}

#footprintOne {
  left: 70%;
  top: 25%;
  animation: footprintOneToRight 1.5s 1s 1;
  animation-fill-mode: forwards;
}

#footprintTwo {
  left: 88%;
  top: 40%;
  animation: footprintTwoToRight 1.5s 1s 1;
  animation-fill-mode: forwards;
}

#footprintThree {
  left: 77%;
  top: 70%;
  animation: footprintThreeToRight 1.5s 1s 1;
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

@keyframes penguinToLeft {
  0 {left: 13%;}
  100% {left: -87%;}
}

@keyframes footprintOneToRight {
  0 {left: 70%;}
  100% {left: 231%;}
}

@keyframes footprintTwoToRight {
  0 {left: 88%;}
  100% {left: 249%;}
}

@keyframes footprintThreeToRight {
  0 {left: 77%;}
  100% {left: 238%;}
}
</style>
