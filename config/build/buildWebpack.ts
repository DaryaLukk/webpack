import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/types';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  const isDev = options.mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry, // точка входа в приложение
    // entry: {
    //     helloWorld: path.resolve(__dirname, 'src', 'index.js')
    // }
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js', // шаблоны для корректного кэш-я в браузере
      clean: true, // очищает предыдущие бандлы
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : false, // отслеживать ошибки
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
