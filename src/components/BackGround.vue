<template>
  <div>
    <div class="about">
      <img src="@/assets/right.jpg" class="right" />
      <img src="@/assets/left.jpg" class="left" />
    </div>
  </div>
</template>
<style scoped>
.about {
  position: relative;
  top: 80px;
  opacity: 0.1;
  z-index: -1;
}
.right {
  height: calc(100vh - 80px);
  position: absolute;
  right: 0vw;
}
.left {
  height: calc(100vh - 80px);
  position: absolute;
  left: 0vw;
}
</style>
