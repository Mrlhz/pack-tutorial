

新建项目 package.json

```
yarn init -y
```

安装webpack 和 webpack-cli

```shell
#
yarn add webpack webpack-cli -D
```


webpack-cli init 选择配置

```
yarn webpack-cli init
```


```shell
# 安装开发依赖
# yarn add webpack babel-loader webpack-cli @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
yarn add @babel/plugin-transform-runtime -D
# 将 runtime 作为依赖
yarn add @babel/runtime -S

#
yarn add -D mini-css-extract-plugin

yarn add core-js
```
