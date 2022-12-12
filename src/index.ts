import px2vw, { type Options } from "@yuo/postcss-px2vw";
import { mergeConfig, type UserConfig } from "vite";

export function mobilePx2vw(options: Options) {
  return {
    name: "vitdoc:mobile-px2vw",
    config(config) {
      const cwd = process.cwd();
      return mergeConfig(config, {
        css: {
          postcss: {
            plugins: [
              px2vw({
                viewportWidth: 750,
                exclude: [
                  new RegExp(`^((?!${cwd}/src).)*$`), // inlucde src
                  new RegExp(`^((?!${cwd}/node_modules).)*$`), // inlucde node_modules
                ] as any,
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
