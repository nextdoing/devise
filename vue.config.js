module.exports = {
  // 公共资源路径设置
  publicPath: "",
  // 支持svg图标
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" });
  },
  // css相关配置
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: false
  },

  productionSourceMap: false
};
