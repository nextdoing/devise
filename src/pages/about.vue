<template>
  <div class="about">
    <section class="bus-userInfo">
      <aside class="bus-userInfo-img">
        <img :src="info.image" alt="image" srcset="" />
      </aside>
      <aside class="bus-userInfo-txt">
        <h3 class="t-font20">{{ info.name }}</h3>
        <p class="t-font14">
          <span class="t-padr">{{ "性别: " + info.sex }}</span>
          <span>{{ "年龄: " + info.age }}</span>
        </p>
      </aside>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "about",
  data() {
    return {
      info: {}
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.aGetData({ name: "infos", data: this.userInfo }).then(res => {
      this.info = res;
    });
  },
  methods: {
    ...mapActions(["aGetData"])
  }
};
</script>

<style lang="less" scoped>
.about {
  width: 40%;
  margin: 100px auto 0;
}
</style>
