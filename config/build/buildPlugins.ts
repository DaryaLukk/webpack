import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshTypeScript from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { BuildOptions } from './types/types';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
  const {
    paths, mode, analyzer, platform,
  } = options;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
    // new webpack.ProgressPlugin(), прогресс сборки
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css', // ?
      }),
    );
    // добавляем в build файлы из public
    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: path.resolve(paths.public, 'locales'), to: path.resolve(paths.output, 'locales') },
        ],
      }),
    );
  }

  if (isDev) {
    plugins.push(
      // выносит проверку типов в отдельный процесс, не нагружая сборку
      new ForkTsCheckerWebpackPlugin(),
    );
    plugins.push(
      // позволяет подгружать изменения без перезагрузки -- Hot module replacement (hmr)
      new ReactRefreshTypeScript(),
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
