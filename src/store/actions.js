import service from "../service";

export default {
  aGetData(store, { name, data = {} }) {
    return service({ name, data });
  }
};
