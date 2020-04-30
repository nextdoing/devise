const fnMap = {};

fnMap.list = data => {
  return data.list;
};

export default {
  process(busName, data) {
    return fnMap[busName] ? fnMap[busName](data) : data;
  }
};
