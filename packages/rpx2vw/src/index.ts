import rpx2vw from "postcss-plugin-rpx2vw";
import { mergeConfig, type UserConfig } from "vite";

export interface Options {
  unitToConvert?: string; // 需要转换的单位，默认为"px"
  viewportWidth?: number; // 设计稿的视窗宽度
  unitPrecision?: number; // 单位转换后保留的精度
  propList?: string[]; // 能转化为 vw 的属性列表
  viewportUnit?: string; // 希望使用的视窗单位
  fontViewportUnit?: string; // 字体使用的视窗单位
  selectorBlackList?: string[]; // 需要忽略的 CSS 选择器，不会转为视窗单位，使用原有的 px 等单位
  minPixelValue?: number; // 设置最小的转换数值，如果为 1 的话，只有大于 1 的值会被转换
  mediaQuery?: boolean; // 媒体查询里的单位是否需要转换单位
  replace?: boolean; // 是否直接更换属性值，而不添加备用属性
  include?: RegExp; // 那将只有匹配到的文件才会被转换
  exclude?: RegExp; // 忽略指定目录, 例如默认忽略了 node_modules
  landscape?: boolean; // 是否添加根据 landscapeWidth 生成的媒体查询条件
  landscapeUnit?: string; // 横屏时使用的单位
  landscapeWidth?: number; // 横屏时使用的视窗宽度
}

export function mobilePx2vw(options: Options) {
  return {
    name: "vitdoc:mobile-px2vw",
    config(config) {
      const cwd = process.cwd();
      return mergeConfig(config, {
        css: {
          postcss: {
            plugins: [
              rpx2vw({
                viewportWidth: 750,
                exclude: new RegExp(`^((?!${cwd}/src).)*$`), // just include src
                ...options,
              }),
            ],
          },
        },
      } as UserConfig);
    },
  };
}

export default mobilePx2vw;
