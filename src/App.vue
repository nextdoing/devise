<template>
  <div id="app" class="lay">
    <div class="lay-head">
      <div class="bus-head">
        <aside class="bus-head-item">
          <img src="@/assets/img/logo.png" class="bus-head-item-logo" alt="" />
        </aside>
        <aside class="bus-head-item t-font20">
          <router-link to="/">X-Temp</router-link>
        </aside>
      </div>
    </div>

    <div class="lay-con">
      <router-view />
    </div>

    <div class="lay-foot bus-lowTxt t-font14">
      Copyright © 2007-2019 Novastar, Inc All Rights Reserved.
    </div>
  </div>
</template>

<style lang="less">
@import url("./style/index.less");
</style>
