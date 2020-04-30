import Mock from "mockjs";

Mock.setup({
  timeout: "100-300"
});

Mock.mock("/login", "get", () => {
  return {
    code: 200,
    msg: null,
    body: {
      userName: "小王",
      role: "超级管理员",
      auth: [101, 102, 103, 104, 105]
    }
  };
});

Mock.mock("/list", "get", {
  code: 200,
  msg: null,
  body: {
    "list|10": [
      {
        "id|+1": 301,
        "name|1": "@cname"
      }
    ]
  }
});

Mock.mock("/infos", "post", data => {
  const res = JSON.parse(data.body);
  return {
    code: 200,
    msg: null,
    body: {
      id: res.id,
      name: res.name,
      age: Mock.Random.natural(18, 35),
      sex: "男",
      image: Mock.Random.dataImage("128x128", Mock.Random.first())
    }
  };
});
