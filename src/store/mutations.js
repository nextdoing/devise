export default {
  mSet(state, ops) {
    state[ops.name] = ops.data;
  }
};
