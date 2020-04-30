import config from "../config";
const rule = {};

rule.protocol = data => {
  const res = {};
  if (data.data && data.data.code == 200) {
    res.ok = true;
    res.data = data.data.body;
  } else {
    res.ok = false;
    res.msg = config.errCode[data.data.code] || "";
  }
  return res;
};

export default rule;
