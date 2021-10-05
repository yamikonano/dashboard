<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 50 50" :style="{'--progress':progress}">

    <circle cx="25" cy="25" r="15.9155"
            class="progress-bar__background" />

    <circle cx="25" cy="25" r="15.9155"
            class="progress-bar__progress
                 js-progress-bar" />
    <text x="50%" y="-48%" alignment-baseline="middle" text-anchor="middle" style=" transform: rotate(90deg)" font-size="7px" fill="#49708F" font-weight="700">{{ ( progress*100).toFixed(0) }}%</text>

  </svg>
</template>

<script>
export default {
  name: "CPB",
  props:{
    progress:{
      type: Number,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
$progress-bar-stroke-width: 3.8;
$progress-bar-size: 320px;

svg {
  height: $progress-bar-size;
  transform: rotate(-90deg);
  width: $progress-bar-size;
}

.progress-bar__background {
  fill: none;
  stroke: #C7DDF1;
  stroke-width: $progress-bar-stroke-width;
}

.progress-bar__progress {
  fill: none;
  //stroke: #e2eff0;
  stroke: #008ECC;
  stroke-dasharray: 100 100;
  stroke-dashoffset: calc(100 - ( var(--progress) * 100 ));
  stroke-linecap: round;
  stroke-width: $progress-bar-stroke-width;

  transition: stroke-dashoffset 1s ease-in-out;
}
</style>