
- [Babel使用指南](https://www.babeljs.cn/docs/usage)

```shell
# npx babel [源文件目录] -d [编译目录]
npx babel src -d src-test
```


- [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav)

> Babel 的插件分为两类：转换插件和语法解析插件。

将箭头函数转换为 ES5 函数写法，可以单独安装`@babel/plugin-transform-arrow-functions`

在 ES5 中，有些对象、方法实际在浏览器中可能是不支持的，例如：`Promise`、`Array.prototype.includes`，这时候就需要用`@babel/polyfill`来做模拟处理



```
[production staging]
> 1%
ie 10

[development]
last 1 chrome version
last 1 firefox version
```

