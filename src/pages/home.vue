<template>
  <div>
    <h1>Name List</h1>
    <ul class="home-list">
      <li v-for="n in list" :key="n.id" class="bus-txtList" @click="look(n)">
        <span class="bus-txtList-item">{{ n.name }}</span>
        <span class="bus-txtList-item bus-lowTxt">
          <v-icon name="eye"></v-icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.aGetData({ name: "list" }).then(res => {
      this.list = res;
    });
  },
  methods: {
    ...mapMutations(["mSet"]),
    ...mapActions(["aGetData"]),
    look(n) {
      this.mSet({ name: "userInfo", data: { id: n.id, name: n.name } });
      this.$router.push({ name: "About", params: { id: n.id } });
    }
  }
};
</script>

<style lang="less" scoped>
.home-list {
  width: 40%;
  margin: auto;
}
</style>
