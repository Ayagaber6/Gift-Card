<template>
  <div class="grid grid-cols-2 main-container">
    <div class="grid justify-start items-center login-box"></div>
    <div class="md:grid hidden items-center">
      <img src="@/assets/6543.jpg" />
    </div>
  </div>
</template>
<style scoped>
.main-container {
  width: 90%;
  height: calc(100vh - 80px);
  background-image: linear-gradient(to right, #7fa9e5 0%, #fff 50%);
  position: absolute;
  top: 80px;
  z-index: -1;
}
</style>
